import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectChanges } from '../../../store/app/theme/theme.selector';
import { changeTheme } from '../../../store/app/theme/theme.action';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public _darkTheme$$: Observable<boolean>;

  constructor(private store: Store) {}

  setTheme(theme: boolean) {
    this.store.dispatch(changeTheme({ change: theme }));
  }

  getTheme() {
    return (this._darkTheme$$ = this.store.select(selectChanges));
  }
}
