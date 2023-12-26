import {NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.model';
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
    declarations : [SignupComponent,
                   LoginComponent],
    imports : [
        ReactiveFormsModule,
        AngularFireAuthModule,
        SharedModule,
        AuthRoutingModule
    ],
    exports : []
})

export class AuthModule {}