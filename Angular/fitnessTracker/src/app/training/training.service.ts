import { reducers } from './../app.reducer';
import { Subscription, map, take } from 'rxjs';
import {Exercise} from './exerecise.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
//import 'rxjs/add/operators/map'
import * as UI from '../shared/ui.actions'
import * as fromTraining from './training.reducer'
import * as Training from './training.actions'


@Injectable()
export class TrainingService {
    private fbSubs : Subscription [] = [];

    constructor(private db : AngularFirestore, private uiService : UIService, private store : Store<fromTraining.State>){}

    fetchAvailableExercises(){
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push (this.db.collection('availableExercises')
        .snapshotChanges()
        .pipe(
         map(docArray => {
         return docArray.map(doc =>{
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data() as Exercise
            }
          
         });
        })
       )
       .subscribe((exercises : Exercise[]) =>{
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.SetAvailableTrainings(exercises));

     }, error =>{
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar('Fetching Exercise failed, please try again later', null,3000);
     }));
    }
    startExercise(selectedId : string){
        this.store.dispatch(new Training.StartTraining(selectedId));
    }

    completeExercise(){
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex =>{
            this.addDataToDatabase ({...ex, date : new Date(),
                state : 'completed'});
                this.store.dispatch(new Training.StopTraining());
        })
    }
    cancelExercise(progress : number){
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex =>{
        this.addDataToDatabase ({...ex,
            duration :ex.duration * (progress/100),
            calories : ex.calories * (progress/100),
            date : new Date(),
            state : 'cancelled'});
            this.store.dispatch(new Training.StopTraining());
        })
            
    }

    fetchCompletedOrCancelExercises(){
        this.fbSubs.push(this.db.collection<Exercise>('finishedExercises').valueChanges().subscribe((exercises:Exercise[]) =>{
            this.store.dispatch(new Training.SetFinishedTrainings(exercises));
        }));
        }

        cancelSubscriptions(){
            this.fbSubs.forEach(sub => sub.unsubscribe());
        }

    private addDataToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}

