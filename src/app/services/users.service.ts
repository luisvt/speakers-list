import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  constructor(afs: AngularFirestore) {
    super('users', afs);
  }
}
