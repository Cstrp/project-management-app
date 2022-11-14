import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map } from 'rxjs';
import { BoardsService, IColumn } from 'src/app/modules';
import { IAppState } from '../app.state';
import { addColumn, addColumnSuccess, loadColumns, loadColumnsSuccess } from './columns.actions';
import { getColumns } from './columns.selector';

@Injectable()
export class ColumnsEffects {
  private boardId: string;
  constructor(
    private actions$: Actions,
    private boardsService: BoardsService,
    private store: Store<IAppState>,
  ) {
  }

  loadColumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadColumns),
      mergeMap((action) => {
        return this.boardsService.getColumns(action.id).pipe(
          map((columns) => {
            return loadColumnsSuccess({ columns });
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
        );
      }),
    );
  });
}
