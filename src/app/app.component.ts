import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-management-app';

  subMenuState: boolean = false;

  burgerClicked(evt: boolean): void {
    this.subMenuState = evt;
    console.log('inside burgerClicked: pls. change showMenu to be:', this.subMenuState);
  }
}
