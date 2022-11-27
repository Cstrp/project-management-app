import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { catchError, delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { ThemeService } from './modules/shared/services/theme.service';
import { LoadingService } from './modules/shared/services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges, AfterContentChecked, AfterViewInit {
  public loading$: Observable<boolean>;

  public darkTheme: Observable<boolean> = this.themeService.updSuccess;

  constructor(
    public loader: LoadingService,
    private ref: ChangeDetectorRef,
    private themeService: ThemeService,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.darkTheme.subscribe();
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

  ngOnChanges() {
    this.loading$ = this.loader.loading$;
  }
}
