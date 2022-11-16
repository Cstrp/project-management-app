import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, switchMap } from 'rxjs';
import { BoardsService, ITask } from 'src/app/modules';
import { IAppState } from '../app.state';
import {
  addTask,
  addTaskSuccess,
  loadTasks,
  loadTasksSuccess,
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
        );
      }),
    );
  });

  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTask),
      mergeMap((action) => {
        return this.boardsService.addTask(action.boardId, action.columnId, action.task).pipe(
          map((data: ITask) => {
            const task = data;
            return addTaskSuccess({ task });
          }),
        );
      }),
    );
  });
}
