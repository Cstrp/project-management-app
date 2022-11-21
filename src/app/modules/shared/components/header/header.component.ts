import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public darkTheme: Observable<boolean> = new Observable<boolean>();

  constructor(public sidenavService: SidenavService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.darkTheme = this.themeService._darkTheme$$;
  }

  toggleTheme(check: boolean): void {
    this.themeService.setTheme(check);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
