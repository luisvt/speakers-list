import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
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
  public appPages = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Users', url: '/users', icon: 'people'},
  ];

  user$: Observable<User>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authSvc: AuthService
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

  logout() {
    try {
      this.authSvc.logout();
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
