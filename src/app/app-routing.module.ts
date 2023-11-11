import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [{
  component: LoginComponent,
  path: 'login'},
  {
    component: RegisterComponent,
    path: 'register'}
    ,
  {
    component: InicioComponent,
    path: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
