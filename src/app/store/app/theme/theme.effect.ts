import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadSuccess, loadTheme, updateTheme, updateThemeSuccess } from './theme.action';
import { of, switchMap } from 'rxjs';

@Injectable()
export class ThemeEffect {
  private init: boolean = false;

  constructor(private actions$: Actions) {}

  loadTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTheme),
      switchMap(({ change }) => {
        return of(loadSuccess({ change }));
      }),
    );
  }); // bread!

  updateTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTheme),
      switchMap(({ change }) => {
        return of(updateThemeSuccess({ change }));
      }),
    );
  }); // bread x2
}
