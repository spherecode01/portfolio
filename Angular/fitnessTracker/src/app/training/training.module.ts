
import { NgModule } from "@angular/core";
import { CurrentTrainingComponent } from "./current-training/current-training.component";

import { PastTrainingComponent } from "./past-training/past-training.component";
import { TrainingComponent } from "./training.component";
import { SharedModule } from "../shared/shared.model";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { NewTrainingComponent } from "./new-training/new-training.component";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { TrainingRoutingModule } from "./training-routing";
import { StoreModule } from "@ngrx/store";
import { trainingReducer } from "./training.reducer";

@NgModule({
    declarations : [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        StopTrainingComponent
    ],
    imports : [
       SharedModule,
       AngularFirestoreModule,
       TrainingRoutingModule,
       StoreModule.forFeature('training', trainingReducer)
    ],
    entryComponents : [StopTrainingComponent]
})

export class TrainingModule {}