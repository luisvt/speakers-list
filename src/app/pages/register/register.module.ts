import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';
import { ValidatorsModule } from 'ngx-validators';
import { MatxModule } from 'angular-material-extended';
import { MatButtonModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ValidatorsModule,
    MatxModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
