import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { catchError, delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { ThemeService } from './modules/shared/services/theme.service';
import { LoadingService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading$: Observable<boolean>;
  title = 'project-management-app';
  public darkTheme: Observable<boolean>;

  constructor(public loader: LoadingService, private ref: ChangeDetectorRef, private themeService: ThemeService) {}

  public ngOnInit(): void {
    this.darkTheme = this.themeService._darkTheme$$;
    this.ref.detectChanges();
    this.loading$ = this.loader.loading$.pipe(
      mergeMap((event) => of(event).pipe(delay(300))),
      catchError((errResp) => {
        return throwError(errResp);
      }),
    );
  }

  public ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }

  public ngAfterViewInit() {
    this.ref.detectChanges();
  }

  public ngOnChages() {
    this.loading$ = this.loader.loading$;
  }
}
