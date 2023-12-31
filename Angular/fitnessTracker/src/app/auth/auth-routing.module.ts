//import { AuthRoutingModule } from './login/auth-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";





const routes : Routes = [
    {path : 'signup', component : SignupComponent},
    {path : 'login', component : LoginComponent}
];

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})
export class AuthRoutingModule {}