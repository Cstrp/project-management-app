import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, switchMap } from 'rxjs';
import { BoardsService, IBoard } from 'src/app/modules';
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

@Injectable()
export class BoardsEffects {
  constructor(private actions$: Actions, private boardsService: BoardsService) {}

  loadBoards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBoards),
      mergeMap((action) => {
        return this.boardsService.getBoards().pipe(
          map((boards) => {
            return loadBoardsSuccess({ boards });
          }),
        );
      }),
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addBoard),
      mergeMap((action) => {
        return this.boardsService.addBoard(action.board).pipe(
          map((data: IBoard) => {
            const board = data;

            return addBoardSuccess({ board });
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
        );
      }),
    );
  });
}
