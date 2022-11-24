import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(public sidenavService: SidenavService, public themeService: ThemeService, private store: Store) {}

  ngOnInit(): void {}

  toggleTheme(theme: boolean): void {
    this.themeService.setTheme(theme);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
