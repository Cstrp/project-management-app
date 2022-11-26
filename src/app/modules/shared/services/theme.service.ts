import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLoadSuccess } from '../../../store/app/theme/theme.selector';
import { LocalStorageService } from '../../../services';
import { loadSuccess, updateThemeSuccess } from '../../../store/app/theme/theme.action';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private initial: boolean = false;

  public theme: string = 'AppTheme';

  public updSuccess: Observable<boolean> = this.store.select(selectLoadSuccess);

  public loadSuccess: Observable<boolean> = this.store.select(selectLoadSuccess);

  constructor(private store: Store, private localStorage: LocalStorageService) {
    this.init();
  }

  setTheme(theme: boolean) {
    this.localStorage.saveData(this.theme, JSON.stringify(theme));

    this.store.dispatch(updateThemeSuccess({ change: theme }));
  }

  init() {
    if (this.initial) {
      return;
    }

    this.initial = true;

    this.loadFromStorage();

    // this.store
    //   .select(selectUpdateSuccess)
    //   .pipe(filter((change) => change))
    //   .subscribe((changes) => this.localStorage.saveData(this.theme, JSON.stringify(changes)));  // bread x3
  }

  public loadFromStorage() {
    const changes = this.localStorage.getData(this.theme);

    if (changes) {
      this.store.dispatch(loadSuccess({ change: JSON.parse(changes) }));
    }
  }
}
