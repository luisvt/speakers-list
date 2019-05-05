import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Users', url: '/users', icon: 'people', permissions: ['ADMIN']},
  ];

  user$: Observable<User>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authSvc: AuthService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    this.user$ = authSvc.user$;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout() {
    try {
      await this.authSvc.logout();
      this.navCtrl.navigateRoot('/home');
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
