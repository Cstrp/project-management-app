import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { ITask } from '../task';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.scss'],
})
export class DeleteTaskModalComponent implements OnInit {
  public task: ITask;
  constructor(
    private store: Store<IAppState>,
    private ref: MatDialogRef<DeleteTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { task: ITask },
  ) {
    this.task = data.task;
  }

  public ngOnInit(): void {}

  public closeModal(): void {
    this.ref.close();
  }

  public deleteModal(): void {
    const task: ITask = this.task;
    // this.store.dispatch(deleteTask({ task }));
    this.closeModal();
  }
}
