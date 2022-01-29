import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path:"",redirectTo:"auth",pathMatch:"full"},
 {path:"auth",loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
