import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-management-app';

  constructor() {}

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
