import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService extends BaseService<Topic> {

  constructor(afs: AngularFirestore) {
    super('topics', afs);
  }
}
