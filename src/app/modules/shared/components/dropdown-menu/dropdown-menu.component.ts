import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SnackBarService } from '../../material/services/snack-bar.service';
import { LocalStorageService, SortService, ThemeService } from '../../services';
import { AuthenticationService } from '../../../auth-page/services/authentication.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLogin } from '../../../../store/auth/auth.selector';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent implements OnInit {
  @Output() public filterInput: EventEmitter<Event> = new EventEmitter<Event>();

  public login$: Observable<string> = this.store.select(selectLogin);

  public login: string = '';

  constructor(
    public themeService: ThemeService,
    private snackBarService: SnackBarService,
    private sortService: SortService,
    private localStorageService: LocalStorageService,
    private authService: AuthenticationService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.login$.subscribe((i) => console.log(i));
  }

  public toggleTheme(theme: boolean): void {
    if (theme) {
      this.snackBarService.openSnackBar('Theme change. Current theme - dark', 'Dismiss');
    } else {
      this.snackBarService.openSnackBar('Theme change. Current theme - Light', 'Dismiss');
    }

    this.themeService.setTheme(theme);
  }

  public logout(): void {
    this.authService.logOut();
  }
}
