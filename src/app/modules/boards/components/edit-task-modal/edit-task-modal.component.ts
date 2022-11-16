import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { ITask } from '../task';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
})
export class EditTaskModalComponent implements OnInit {
  public editTaskForm: FormGroup;

  public statusForm: string = 'VALID';

  public title: string;

  public description: string;

  public userId: string;

  public task: ITask;

  constructor(
    private store: Store<IAppState>,
    private ref: MatDialogRef<EditTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { task: ITask },
  ) {
    this.task = data.task;
  }

  public ngOnInit(): void {
    this.editTaskForm = new FormGroup({
      taskTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      taskDescription: new FormControl('', [Validators.required, Validators.minLength(3)]),
      taskUser: new FormControl('', [Validators.required]),
    });

    this.editTaskForm.statusChanges.subscribe((value) => {
      if (this.editTaskForm.dirty) {
        this.statusForm = value;
      }
    });

    this.title = this.editTaskForm.controls['taskTitle'].value;
  }

  public closeModal(): void {
    this.editTaskForm.reset();
    this.editTaskForm.markAsUntouched();
    this.editTaskForm.markAsPristine();
    this.ref.close();
  }

  public onSubmit(): void {
    this.title = this.editTaskForm.controls['taskTitle'].value;
    this.description = this.editTaskForm.controls['taskDescription'].value;
    const task: ITask = {
      title: this.title,
      description: this.description,
      userId: this.userId,
    };
    const boardId: string = this.task.boardId as string;
    const columnId: string = this.task.columnId as string;
    const taskId: string = this.task.id as string;
    // this.store.dispatch(editTask({ boardId, columnId, taskId, task }));
    this.closeModal();
  }
}
