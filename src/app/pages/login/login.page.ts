import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    email: '',
    password: '',
  };

  constructor(private router: Router,
              private toastCtrl: ToastController,
              private authService: AuthService) { }

  ngOnInit() {
  }

  async login() {
    try {
      await this.authService.signInWithEmail(this.credentials.email, this.credentials.password);
    } catch (err) {
      (await this.toastCtrl.create({
        message: err.message,
        color: 'danger',
        position: 'top',
        duration: 5000
      })).present();
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['']);
    } catch (err) {
      (await this.toastCtrl.create({
        message: err.message,
        color: 'danger',
        position: 'middle',
        duration: 5000
      })).present();
    }
  }


}
