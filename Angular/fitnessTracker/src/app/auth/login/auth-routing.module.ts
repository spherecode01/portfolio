import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path : 'signup', component : SignupComponent},
  {path : 'login', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers : [RouterModule]
})
export class AuthRoutingModule { }
