import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  {
    path: 'propose-topic', loadChildren: './pages/topic-form/topic-form.module#TopicFormPageModule',
    canActivate: [NgxPermissionsGuard],
    data: {permissions: {only: ['ADMIN', 'SPEAKER']}}
  },
  {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  {path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule'},
  {
    path: 'users', loadChildren: './pages/users/users.module#UsersPageModule',
    canActivate: [NgxPermissionsGuard],
    data: {permissions: {only: 'ADMIN'}}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
