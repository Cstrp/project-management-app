import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { addTask, deleteTask, getTasks, IAppState, loadTasks, updateTask } from 'src/app/store';
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
  }

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

    this.tasks$.subscribe((data) => {
      this.tasksArray = data;
    });

    this.store.dispatch(loadTasks({ boardId, columnId }));
  }

  public editOrderTask(taskEdited: ITask, taskOrder: number, idTask?: string) {
    const task: ITask = {
      title: taskEdited.title,
      order: taskOrder,
      description: taskEdited.description,
      userId: taskEdited.userId,
      boardId: taskEdited.boardId,
      columnId: taskEdited.columnId,
    };

    const taskId: string = idTask ? idTask : (taskEdited.id as string);
    this.store.dispatch(updateTask({ taskId, task }));
  }

  public dropTasks(event: CdkDragDrop<Array<ITask>>) {
    if (event.previousContainer === event.container) {
      this.dropTasksIntoArray(event);
    } else {
      this.dropTasksBetweenArrays(event);
    }
  }

  public dropTasksIntoArray(event: CdkDragDrop<Array<ITask>>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    let task1 = event.container.data[event.currentIndex];
    let task2 = event.container.data[event.previousIndex];
    this.editOrderTask(task1, event.currentIndex + 1);
    this.editOrderTask(task2, event.previousIndex + 1);
  }

  public dropTasksBetweenArrays(event: CdkDragDrop<Array<ITask>>) {
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    let columnId: string = event.container.element.nativeElement.id;
    let selectedTask: ITask = event.container.data[event.currentIndex];
    let prevNeighboringTask: ITask = event.previousContainer.data[event.previousIndex];
    let futureNeighboringTask: ITask = event.container.data[event.currentIndex + 1];

    if (prevNeighboringTask) {
      this.editOrderTask(prevNeighboringTask, event.previousIndex + 1);
    }

    if (futureNeighboringTask) {
      this.editOrderTask(futureNeighboringTask, event.currentIndex + 2);
    }

    const selectTaskOrder: number = event.currentIndex + 1;
    this.changeTaskColumn(selectedTask, columnId, selectTaskOrder);
  }

  public changeTaskColumn(taskElem: ITask, columnId: string, selectTaskOrder: number) {
    const task: ITask = {
      title: taskElem.title,
      description: taskElem.description,
      userId: taskElem.userId,
      boardId: taskElem.boardId,
    };
    this.deleteTask(taskElem);
    this.addTaskToColumn(task, columnId, selectTaskOrder);
  }

  public addTaskToColumn(taskElem: ITask, columnId: string, taskOrder: number) {
    const task: ITask = {
      title: taskElem.title,
      description: taskElem.description,
      userId: taskElem.userId,
    };
    const boardId: string = taskElem.boardId as string;
    this.store.dispatch(addTask({ boardId, columnId, task, taskOrder }));
    this.store.dispatch(loadTasks({ boardId, columnId }));
  }

  public deleteTask(task: ITask) {
    this.store.dispatch(deleteTask({ task }));
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

  private setColumnsIds(value: IColumn[]): void {
    this.columnsIds = value.map((item) => item.id as string);
  }
}
