import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopicDetailPage } from './topic-detail.page';
import { NgxPermissionsModule } from 'ngx-permissions';

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
    IonicModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule
  ],
  declarations: [TopicDetailPage]
})
export class TopicDetailPageModule {}
