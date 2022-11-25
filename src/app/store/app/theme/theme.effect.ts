import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ThemeService } from '../../../modules/shared/services/theme.service';

@Injectable()
export class ThemeEffect {
  constructor(private actions$: Actions, private themeService: ThemeService) {}

  // toggleTheme$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(changeTheme),
  //     switchMap((effect) => {
  //       return of(changeTheme({ change: effect.change }));
  //       // map((change) => {
  //       //   return of(changeTheme({ change: change }));
  //       // }),
  //     }),
  //   );
  // });

  // @ts-ignore
  //   toggleTheme$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(changeTheme),
  //       // switchMap(async (effect) => console.log(effect)),
  //     );
  //   });
  // }
}

// switchMap((effect) =>
//   this.themeService.getTheme(effect.change).pipe(
//     map((change) => {
//       return changeTheme({ change: change });
//     }),
//   ),
// ),
// toggleTheme$ = createEffect(() => {
//   return this.actions$.pipe(
//     ofType(changeTheme),
//     switchMap((action) => {
//       return concat(of(changeTheme({ change: action.change })));
//     }),
//   );
// });
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
