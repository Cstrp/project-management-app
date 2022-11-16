import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading$: Observable<boolean>;

  public title = 'project-management-app';

  public subMenuState: boolean = false;

  constructor(public loader: LoadingService, private ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.ref.detectChanges();
    this.loading$ = this.loader.loading$;
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

  public burgerClicked(evt: boolean): void {
    this.subMenuState = evt;
    console.log('inside burgerClicked: pls. change showMenu to be:', this.subMenuState);
  }
}
