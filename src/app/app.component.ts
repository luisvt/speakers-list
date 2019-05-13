import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { MatxSidenavMenuController } from 'angular-material-extended';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {
  appPages = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Users', url: '/users', icon: 'people', permissions: ['ADMIN']},
  ];

  loggedIn: boolean;

  private readonly mobileQuery: MediaQueryList;

  private readonly mobileQueryListener: () => void;

  private readonly subscription: Subscription;

  constructor(public authSvc: AuthService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public sideNavCtrl: MatxSidenavMenuController,
              private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    sideNavCtrl.isMobile = this.mobileQuery.matches;
    this.mobileQueryListener = () => {
      sideNavCtrl.isMobile = this.mobileQuery.matches;
      sideNavCtrl.opened = !sideNavCtrl.isMobile;
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.subscription = authSvc.user$.subscribe(user => this.loggedIn = !!user);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.subscription.unsubscribe();
  }

  async logout() {
    try {
      await this.authSvc.logout();
      this.router.navigateByUrl('/home');
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
