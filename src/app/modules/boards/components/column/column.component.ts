import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  public tasks$: Observable<Array<ITask>>;
  public tasksArray: Array<ITask>;
  public columnsIds: string[];

  @Input() public column: IColumn;
  @Input() public boardId: string | undefined;
  @Input() public set columns(value: IColumn[]) {
    this.setColumnsIds(value);
  };

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

  public dropTasks(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public openDeleteColumnModal(): void {
    this.matDialog.open(DeleteColumnModalComponent, {
      width: '20%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',

      data: {
        boardId: this.boardId,
        columnId: this.column.id,
      },
    });
  }

  public openCreateTask(): void {
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

  public openCreateTask(): void {
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

  private setColumnsIds(value: IColumn[]): void {
    this.columnsIds = value.map(item => item.id as string);
  }
}
