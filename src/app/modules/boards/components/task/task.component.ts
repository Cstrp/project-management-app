import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store';
import { BoardsService, IUser } from '../../services';
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
  public taskUserInfo$: Observable<IUser>;

  constructor(public matDialog: MatDialog, public store: Store<IAppState>, private boardsService: BoardsService) {}

  ngOnInit(): void {
    this.taskUserInfo$ = this.boardsService.getTaskUserInfo(this.task.userId);
  }

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
