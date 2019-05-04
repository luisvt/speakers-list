import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicsService } from '../../services/topics.service';
import { Topic } from '../../models/topic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  topics$: Observable<Topic[]>;

  constructor(private topicsSvc: TopicsService) {
    this.topics$ = topicsSvc.findAll();
  }
}
