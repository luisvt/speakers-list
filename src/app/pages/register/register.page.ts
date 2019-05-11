import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log('this.credentials: ', this.credentials);
    this.authSvc.registerWithEmail(this.credentials);
  }
}
