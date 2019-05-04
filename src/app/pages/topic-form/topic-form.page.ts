import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.page.html',
  styleUrls: ['./topic-form.page.scss'],
})
export class TopicFormPage implements OnInit {

  model: Topic = {};

  constructor(private topicsSvc: TopicsService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  async save() {
    try {
      await this.topicsSvc.save(this.model);
      this.navCtrl.back();
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
