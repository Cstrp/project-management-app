import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap, throwError } from 'rxjs';
import { BoardsService, IColumn } from 'src/app/modules';
import {
  addColumn,
  addColumnSuccess,
  deleteColumn,
  deleteColumnSuccess,
  loadColumns,
  loadColumnsSuccess,
  updateColumn,
  updateColumnSuccess,
} from './columns.actions';

@Injectable()
export class ColumnsEffects {
  constructor(private actions$: Actions, private boardsService: BoardsService, private store: Store) {}

  loadColumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadColumns),
      mergeMap((action) => {
        return this.boardsService.getColumns(action.id).pipe(
          map((columns) => {
            return loadColumnsSuccess({ columns });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  addColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addColumn),
      mergeMap((action) => {
        return this.boardsService.addColumn(action.id, action.column).pipe(
          map((data: IColumn) => {
            const column = data;

            return addColumnSuccess({ column });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  updateColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateColumn),
      mergeMap((action) => {
        return this.boardsService.updateColumn(action.boardId, action.column, action.columnId).pipe(
          map((data) => {
            return updateColumnSuccess({ column: data });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  deleteColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteColumn),
      switchMap((action) => {
        return this.boardsService.deleteColumn(action.boardId, action.columnId).pipe(
          map((data) => {
            return deleteColumnSuccess({ id: action.columnId });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });
}
