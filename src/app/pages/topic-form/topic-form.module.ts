import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TopicFormPage } from './topic-form.page';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatxModule } from 'angular-material-extended';

const routes: Routes = [
  {
    path: '',
    component: TopicFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatxModule,
    MatButtonModule
  ],
  declarations: [TopicFormPage]
})
export class TopicFormPageModule {}
