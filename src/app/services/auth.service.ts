import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { flatMap, map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { NgxPermissionsService } from 'ngx-permissions';
import GoogleAuthProvider = auth.GoogleAuthProvider;
import AuthProvider = auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user$(): Observable<User> {
    return this.afAuth.user.pipe(
      flatMap(user => {
        return user && this.afs.doc<User>(`users/${user.uid}`).snapshotChanges().pipe(
          map(a => {
            const item = a.payload.data();
            item.uid = a.payload.id;
            return item;
          }),
          take(1)
        ) || of(null);
      }));
  }

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private permissionsSvc: NgxPermissionsService) {
    this.user$.subscribe(user => {
      if (user) {
        permissionsSvc.loadPermissions([user.role]);
      } else {
        permissionsSvc.flushPermissions();
      }
    });
  }

  private async oAuthLogin(provider: AuthProvider) {
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    const user = await this.afs.doc<User>('/users/' + credentials.user.uid).valueChanges().pipe(take(1)).toPromise();
    if (!user) {
      return this.afs.doc('/users/' + credentials.user.uid).set({
        email: credentials.user.email,
        name: credentials.user.displayName,
        description: 'Speaker',
        photoUrl: credentials.user.photoURL,
        role: 'SPEAKER'
      });
    }
  }

  signInWithGoogle() {
    return this.oAuthLogin(new GoogleAuthProvider());
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async registerWithEmail(credentials) {
     const userCredentials = await this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
     return this.afs.doc('/users/' + userCredentials.user.uid).set({
       email: credentials.email,
       name: credentials.name,
       description: credentials.description,
       photoUrl: credentials.photoURL,
       role: 'SPEAKER'
     });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
