import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials = {
    name: '',
    description: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authSvc: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
  }

  async register() {
    try {
      await this.authSvc.registerWithEmail(this.credentials);
      this.router.navigateByUrl('/');
    } catch (e) {
      this.snackBar.open(e.message, 'Ok', {
        panelClass: 'mat-warn',
        verticalPosition: 'top',
        duration: 10000
      });
    }
  }
}
