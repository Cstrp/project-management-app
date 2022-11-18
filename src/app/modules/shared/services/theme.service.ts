import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme$: Subject<boolean> = new Subject<boolean>();

  public _darkTheme$$ = this._darkTheme$.asObservable();

  constructor() {}

  setTheme(theme: boolean): void {
    this._darkTheme$.next(theme);
  }
}
