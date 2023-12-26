import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exerecise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training.reducer'

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit{
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

 
  @ViewChild(MatSort) sort : MatSort;

  constructor(private trainingService : TrainingService, private store : Store<fromTraining.State>){}

  ngOnInit() {
  this.store.select(fromTraining.getFinishedExercises).subscribe((exercises : Exercise []) =>{
    this.dataSource.data = exercises;
    });
     this.trainingService.fetchCompletedOrCancelExercises();
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
  formatDate(milliseconds: number): Date {
    return  new Date(milliseconds);

  }


  /*applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();*/
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
}


