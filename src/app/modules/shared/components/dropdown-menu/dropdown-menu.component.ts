import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(theme: boolean): void {
    this.themeService.setTheme(theme);
  }
}
