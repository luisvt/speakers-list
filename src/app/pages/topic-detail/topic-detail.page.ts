import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.page.html',
  styleUrls: ['./topic-detail.page.scss'],
})
export class TopicDetailPage implements OnInit {

  topic$: Observable<Topic>;

  user$: Observable<User>;

  constructor(private topicsSvc: TopicsService,
              private route: ActivatedRoute,
              private authSvc: AuthService) {
    this.topic$ = route.params.pipe(switchMap(params => topicsSvc.findByUid(params.id)));
    this.user$ = authSvc.user$;
  }

  ngOnInit() {
  }

}
