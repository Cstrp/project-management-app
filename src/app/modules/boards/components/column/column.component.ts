import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { getTasks, IAppState, loadTasks } from 'src/app/store';
import { updateColumn } from 'src/app/store/columns';
import { AddTaskModalComponent } from '../add-task-modal';
import { DeleteColumnModalComponent } from '../delete-column-modal';
import { ITask } from '../task';
import { IColumn } from './models';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  public isEditMode: boolean = false;
  public editColumnForm: FormGroup;
  public statusForm: string = 'VALID';
  public columnTitle: string = '';
  @Input() public column: IColumn;
  @Input() public boardId: string | undefined;
  public tasks$: Observable<Array<ITask>> | null;
  public tasksArray: Array<ITask>;

  constructor(public matDialog: MatDialog, public store: Store<IAppState>) {}

  ngOnInit(): void {
    this.editColumnForm = new FormGroup({
      columnTitle: new FormControl(this.column.title, [Validators.required, Validators.minLength(3)]),
    });

    this.editColumnForm.statusChanges.subscribe((value) => {
      if (this.editColumnForm.dirty) {
        this.statusForm = value;
      }
    });

    const boardId: string = this.boardId as string;
    const columnId: string = this.column.id as string;

    if(!this.tasks$){
      this.tasks$ = this.store.select(getTasks).pipe(
        map((value) =>
          [...value]
            .filter((task) => task.columnId === this.column.id)
            .sort((a: ITask, b: ITask) => {
              return (a.order as number) - (b.order as number);
            }),
        ),
      );

      this.store.dispatch(loadTasks({ boardId, columnId }));
    }

  }

  public openDeleteColumnModal(): void {
    this.matDialog.open(DeleteColumnModalComponent, {
      width: '15%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',

      data: {
        boardId: this.boardId,
        columnId: this.column.id,
      },
    });
  }

  public openCreateTask(): void {
    console.log(this.column.id);
    this.matDialog.open(AddTaskModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',

      data: {
        boardId: this.boardId,
        columnId: this.column.id,
      },
    });
  }

  public toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  public editColumn(): void {
    this.columnTitle = this.editColumnForm.controls['columnTitle'].value;
    const column: IColumn = {
      title: this.columnTitle,
      order: this.column.order,
    };
    if (this.boardId) {
      const boardId: string = this.boardId;
      if (this.column.id) {
        const columnId: string = this.column.id;
        this.store.dispatch(updateColumn({ boardId, column, columnId }));
      }
    }
    this.toggleEditMode();
  }
}
