import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { catchError, filter, map, mergeMap, of, switchMap, throwError, withLatestFrom } from 'rxjs';
import { BoardsService, IBoard } from 'src/app/modules';
import { IAppState } from '../app.state';
import { RouterStateUrl } from '../app/router/custom-serializer';
import { dummyAction } from '../auth/auth.action';
import {
  addBoard,
  addBoardSuccess,
  deleteBoard,
  deleteBoardSuccess,
  loadBoards,
  loadBoardsSuccess,
  updateBoard,
  updateBoardSuccess,
} from './boards.actions';
import { getBoards } from './boards.selector';

@Injectable()
export class BoardsEffects {
  constructor(private actions$: Actions, private boardsService: BoardsService, private store: Store<IAppState>) {}

  loadBoards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBoards),
      mergeMap((action) => {
        return this.boardsService.getBoards().pipe(
          map((boards) => {
            return loadBoardsSuccess({ boards });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  addBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addBoard),
      mergeMap((action) => {
        return this.boardsService.addBoard(action.board).pipe(
          map((data: IBoard) => {
            const board = data;

            return addBoardSuccess({ board });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  updateBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateBoard),
      switchMap((action) => {
        return this.boardsService.updateBoard(action.board).pipe(
          map((data) => {
            return updateBoardSuccess({ board: data });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  deleteBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteBoard),
      switchMap((action) => {
        return this.boardsService.deleteBoard(action.id).pipe(
          map((data) => {
            return deleteBoardSuccess({ id: action.id });
          }),
          catchError((errResp) => {
            return throwError(errResp);
          }),
        );
      }),
    );
  });

  getBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction<RouterStateUrl>) => {
        return r.payload.routerState.url.startsWith('/boards');
      }),
      map((r: RouterNavigatedAction<RouterStateUrl>) => {
        return r.payload.routerState.params['id'];
      }),
      concatLatestFrom(() => this.store.select(getBoards)),
      switchMap(([id, boards]) => {
        if (!boards.length) {
          if (id) {
            return this.boardsService.getBoardById(id).pipe(
              map((board) => {
                const boardData = [{ ...board }];

                return loadBoardsSuccess({ boards: boardData });
              }),
            );
          }
        }

        return of(dummyAction());
      }),
      catchError((errResp) => {
        return throwError(errResp);
      }),
    );
  });
}
