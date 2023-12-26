import { Subscription, Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators,FormsModule,ReactiveFormsModule, NgForm} from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import {Store} from '@ngrx/store'
import * as fromRoot from '../../app.reducer'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  isLoading$ : Observable<boolean>
  

  constructor(private authService : AuthService,
    private uiService : UIService, private store : Store<fromRoot.State>){}


  ngOnInit(){
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }
  onSubmit(form : NgForm){
    this.authService.registerUser({
      email : form.value.email,
      password : form.value.password
    });
  }

  
}
