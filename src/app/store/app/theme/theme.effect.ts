import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ThemeService } from '../../../modules/shared/services/theme.service';
import { changeTheme } from './theme.action';
import { concat, of, switchMap } from 'rxjs';

@Injectable()
export class ThemeEffect {
  constructor(private actions$: Actions, private themeService: ThemeService) {}

  toggleTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeTheme),
      switchMap((action) => {
        return concat(of(changeTheme({ change: action.change })));
      }),
    );
  });
}
//   toggleTheme$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(changeTheme),
//       switchMap(() => this.themeService.getTheme().pipe(map((theme) => of(changeTheme({ change: !theme }))))),
//     );
//   });
// }

//   toggleTheme$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(changeTheme),
//       switchMap(() => {
//         return this.themeService.getTheme().pipe(
//           map((change: boolean) => {
//             return of(changeTheme({ change }));
//           }),
//         );
//       }),
//     );
//   });
// }

// toggleTheme$ = createEffect(() => {
//   return this.actions$.pipe(
//     ofType(changeTheme),
//     switchMap(()=> this.themeService.getTheme().pipe((map((change)=>{
//     return of(changeTheme({change: change}))}{}{|}{|}{}|
// );

// togsgleTsheme$ = createEffect(() => {
//   return this.actions$.pipe(
//     ofType(changeTheme),
//     switchMap((action) => {
//       return this.themeService.getTheme().pipe(map((change) => action));
//     }),
//   );
// });
// toggleTheme$ = createEffect(() => {
//   return this.actions$.pipe(
//     ofType(changeTheme),
//     switchMap((action) => {
//       return of(changeTheme({ change: action.change }));
//     }),
//   );
// });
