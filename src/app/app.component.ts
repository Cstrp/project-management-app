import { Component } from '@angular/core';
import { LoadingService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading$ = this.loader.loading$;

  public title = 'project-management-app';

  public subMenuState: boolean = false;

  constructor(public loader: LoadingService) {}

  public burgerClicked(evt: boolean): void {
    this.subMenuState = evt;
    console.log('inside burgerClicked: pls. change showMenu to be:', this.subMenuState);
  }
}
