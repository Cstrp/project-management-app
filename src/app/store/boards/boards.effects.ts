import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import { BoardsService } from 'src/app/modules';
import { loadBoards } from './boards.actions';

@Injectable()
export class BoardsEffects {
  constructor(private actions$: Actions, private boardsService: BoardsService) {}

  loadBoards$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadBoards),
        mergeMap((action) => {
          return this.boardsService.getBoards().pipe(
            map((data) => {
              console.log('data', data);
            }),
          );
        }),
      );
    },
    {
      dispatch: false,
    },
  );
}
