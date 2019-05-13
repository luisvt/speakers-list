import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TopicDetailPage } from './topic-detail.page';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MatxModule } from 'angular-material-extended';

const routes: Routes = [
  {
    path: '',
    component: TopicDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule,
    MatToolbarModule,
    MatxModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [TopicDetailPage]
})
export class TopicDetailPageModule {}
