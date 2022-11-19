import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, switchMap, tap, catchError, of, throwError } from 'rxjs';
import { BoardsService, ITask } from 'src/app/modules';
import { IAppState } from '../app.state';
import {
  addTask,
  addTaskSuccess,
  deleteTask,
  deleteTaskSuccess,
  loadTasks,
  loadTasksSuccess,
  updateTask,
  updateTaskSuccess,
} from './tasks.actions';

@Injectable()
export class TasksEffects {
  constructor(private actions$: Actions, private boardsService: BoardsService, private store: Store<IAppState>) {}

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTasks),
      mergeMap((action) => {
        return this.boardsService.getTasks(action.boardId, action.columnId).pipe(
          map((tasks: Array<ITask>) => {
            return loadTasksSuccess({ tasks });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  addTask$ = createEffect(() => {
    let newTask: ITask;
    let newTaskOrder: number;
    return this.actions$.pipe(
      ofType(addTask),
      mergeMap((action) => {
        return this.boardsService.addTask(action.boardId, action.columnId, action.task).pipe(
          map((data: ITask) => {
            const task = data;
            newTask = task;
            if (action.taskOrder) {
              newTaskOrder = action.taskOrder;
            }
            return addTaskSuccess({ task });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
      tap(() => {
        if (newTaskOrder) {
          const taskId: string = newTask.id as string;
          const boardId: string = newTask.boardId as string;
          const columnId: string = newTask.columnId as string;
          const task: ITask = {
            title: newTask.title,
            description: newTask.description,
            userId: newTask.userId,
            order: newTaskOrder,
            boardId: newTask.boardId,
            columnId: newTask.columnId,
          };
          this.store.dispatch(updateTask({ taskId, task }));
        }
      }),
    );
  });

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTask),
      mergeMap((action) => {
        return this.boardsService.updateTask(action.taskId, action.task).pipe(
          map((data: ITask) => {
            return updateTaskSuccess({ task: data });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTask),
      switchMap((action) => {
        return this.boardsService.deleteTask(action.task).pipe(
          map((data) => {
            return deleteTaskSuccess({ id: action.task.id as string });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });
}
