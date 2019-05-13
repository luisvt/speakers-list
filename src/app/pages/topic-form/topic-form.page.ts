import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.page.html',
  styleUrls: ['./topic-form.page.scss'],
})
export class TopicFormPage implements OnInit {

  model: Topic = {};

  constructor(private topicsSvc: TopicsService,
              private location: Location,
              private route: ActivatedRoute,
              private authSvc: AuthService) { }

  async ngOnInit() {
    const params = await this.route.params.pipe(take(1)).toPromise();

    if (params.id) { this.model = await this.topicsSvc.findByUid(params.id).pipe(take(1)).toPromise(); }
  }

  async save() {
    try {
      if (!this.model.uid) {
        const user = await this.authSvc.user$.pipe(take(1)).toPromise();
        this.model.createdBy = user.uid;
      }
      await this.topicsSvc.save(this.model);
      this.location.back();
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
