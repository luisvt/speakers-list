import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

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
              private snackBar: MatSnackBar,
              private authService: AuthService) { }

  ngOnInit() {
  }

  async login() {
    try {
      await this.authService.signInWithEmail(this.credentials.email, this.credentials.password);
    } catch (err) {
      this.snackBar.open(err.message, 'Ok', {
        panelClass: 'mat-warn',
        verticalPosition: 'top',
        duration: 5000
      });
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['']);
    } catch (err) {
      this.snackBar.open(err.message, 'Ok', {
        panelClass: 'mat-warn',
        verticalPosition: 'top',
        duration: 5000
      });
    }
  }


}
