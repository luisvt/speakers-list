import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatButtonModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatxModule } from 'angular-material-extended';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPermissionsModule.forChild(),
    RouterModule.forChild([
      {path: '', component: HomePage}
    ]),
    MatToolbarModule,
    MatListModule,
    MatxModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
