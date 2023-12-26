import { Subject } from 'rxjs';
import { CloseScrollStrategy } from "@angular/cdk/overlay";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


@Injectable()
export class UIService {
    loadingStateChanged = new Subject<boolean>();

    constructor(private snackbar : MatSnackBar){}

    showSnackbar(message: string, action: string, duration: any){
        this.snackbar.open(message,action, {
            duration : duration
        })
    }
}