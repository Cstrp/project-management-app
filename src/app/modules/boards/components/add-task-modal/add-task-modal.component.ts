import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask } from 'src/app/store';
import { BoardsService, IUser } from '../../services';
import { ITask } from '../task';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {
  public addTaskForm: FormGroup;

  public statusForm: string = 'VALID';

  public title: string;

  public description: string;

  public boardId: string;

  public columnId: string;

  public userId: string;

  public users$: Observable<Array<IUser>>;

  constructor(
    private store: Store,
    private boardService: BoardsService,
    private ref: MatDialogRef<AddTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { boardId: string; columnId: string },
  ) {
    this.boardId = data.boardId;
    this.columnId = data.columnId;
  }

  public ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      taskDescription: new FormControl('', [Validators.required, Validators.minLength(3)]),
      taskUser: new FormControl('', [Validators.required]),
    });

    this.addTaskForm.statusChanges.subscribe((value) => {
      if (this.addTaskForm.dirty) {
        this.statusForm = value;
      }
    });

    this.title = this.addTaskForm.controls['taskTitle'].value;
    this.users$ = this.boardService.getTasksUsers();
  }

  public closeModal(): void {
    this.addTaskForm.reset();
    this.addTaskForm.markAsUntouched();
    this.addTaskForm.markAsPristine();
    this.ref.close();
  }

  public onSubmit(): void {
    this.title = this.addTaskForm.controls['taskTitle'].value;
    this.description = this.addTaskForm.controls['taskDescription'].value;
    this.userId = this.addTaskForm.controls['taskUser'].value;

    const task: ITask = {
      title: this.title,
      description: this.description,
      userId: this.userId,
    };
    const boardId: string = this.boardId;
    const columnId: string = this.columnId;

    this.store.dispatch(addTask({ boardId, columnId, task }));
    this.closeModal();
  }
}
