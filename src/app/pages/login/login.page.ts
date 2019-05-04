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

  login() {
    console.log('this.credentials: ', this.credentials);
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['']);
    } catch (err) {
      (await this.toastCtrl.create({message: err.message})).present();
    }
  }


}
