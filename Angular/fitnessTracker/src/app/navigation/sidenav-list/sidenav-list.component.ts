import { Component, Output, EventEmitter } from '@angular/core';
import {  Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$ : Observable<boolean>;

  constructor(private authService : AuthService, private store : Store<fromRoot.State>){}

  ngOnInit(){
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

 
  onClose(){
    this.closeSidenav.emit;
  }
  onLogout(){
    this.onClose();
    this.authService.logout();
  
  }

}
