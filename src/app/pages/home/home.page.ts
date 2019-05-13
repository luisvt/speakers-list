import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TopicsService } from '../../services/topics.service';
import { Topic } from '../../models/topic';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatxPromptController } from 'angular-material-extended';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  topics$: Observable<Topic[]>;

  user: User;

  subscription: Subscription;

  constructor(private topicsSvc: TopicsService,
              private authSvc: AuthService,
              private promptCtrl: MatxPromptController,
              private router: Router) {
    this.topics$ = topicsSvc.findAll();
    this.subscription = authSvc.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private async showLoginAlert() {
    await this.promptCtrl.prompt({
      message: 'You need to login to vote',
      actions: [
        'Cancel',
        {
          text: 'Login',
          callback: () => this.router.navigateByUrl('/login')
        }
      ]
    });
  }

  async votePositive(topic: Topic) {
    if (!this.user) {
      await this.showLoginAlert();
      return;
    }

    if (topic.negativeVotes && topic.negativeVotes.length) {
      const index = topic.negativeVotes.indexOf(this.user.uid);
      if (index > -1) { topic.negativeVotes.splice(index, 1); }
    }

    if (topic.positiveVotes && topic.positiveVotes.length) {
      const index = topic.positiveVotes.indexOf(this.user.uid);
      if (index > -1) {
        topic.positiveVotes.splice(index, 1);
      } else {
        topic.positiveVotes.push(this.user.uid);
      }
    } else {
      topic.positiveVotes = [this.user.uid];
    }

    this.topicsSvc.save(topic);
  }

  async voteNegative(topic: Topic) {
    if (!this.user) {
      await this.showLoginAlert();
      return;
    }

    if (topic.positiveVotes && topic.positiveVotes.length) {
      const index = topic.positiveVotes.indexOf(this.user.uid);
      if (index > -1) { topic.positiveVotes.splice(index, 1); }
    }

    if (topic.negativeVotes && topic.negativeVotes.length) {
      const index = topic.negativeVotes.indexOf(this.user.uid);
      if (index > -1) {
        topic.negativeVotes.splice(index, 1);
      } else {
        topic.negativeVotes.push(this.user.uid);
      }
    } else {
      topic.negativeVotes = [this.user.uid];
    }

    this.topicsSvc.save(topic);
  }
}
