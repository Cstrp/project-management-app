import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { DeleteTaskModalComponent } from '../delete-task-modal';
import { EditTaskModalComponent } from '../edit-task-modal';
import { ITask } from './models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() public task: ITask;

  constructor(public matDialog: MatDialog, public store: Store<IAppState>) {}

  ngOnInit(): void {}

  public openDeleteTaskModal(): void {
    this.matDialog.open(DeleteTaskModalComponent, {
      width: '15%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',

      data: {
        task: this.task,
      },
    });
  }

  public openEditTaskModal(): void {
    this.matDialog.open(EditTaskModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',

      data: {
        task: this.task,
      },
    });
  }
}
