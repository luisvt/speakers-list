import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.page.html',
  styleUrls: ['./topic-form.page.scss'],
})
export class TopicFormPage implements OnInit {

  model: Topic = {};

  constructor(private topicsSvc: TopicsService,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              private authSvc: AuthService) { }

  async ngOnInit() {
    const params = await this.route.params.pipe(take(1)).toPromise();

    if (params.id) { this.model = await this.topicsSvc.findByUid(params.id).pipe(take(1)).toPromise(); }
  }

  async save() {
    try {
      const user = await this.authSvc.user$.pipe(take(1)).toPromise();
      this.model.createdBy = user.uid;
      await this.topicsSvc.save(this.model);
      this.navCtrl.back();
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
