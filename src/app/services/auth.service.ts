import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { flatMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import GoogleAuthProvider = auth.GoogleAuthProvider;
import AuthProvider = auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user$(): Observable<User> {
    return this.afAuth.user.pipe(
      flatMap(user =>
        user && this.afs.doc<User>(`users/${user.uid}`).snapshotChanges()
          .pipe(map(a => {
              const item = a.payload.data();
              item.uid = a.payload.id;
              return item;
            })
          )
        || of(null)));
  }

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
  }

  private oAuthLogin(provider: AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      return this.afs.doc('/users/' + credentials.user.uid).set({
        email: credentials.user.email,
        name: credentials.user.displayName,
        description: 'Speaker',
        photoUrl: credentials.user.photoURL,
        role: 'speaker'
      });
    });
  }

  signInWithGoogle() {
    return this.oAuthLogin(new GoogleAuthProvider());
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
