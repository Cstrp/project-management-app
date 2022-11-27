import { Component, OnInit } from '@angular/core';
import { SortService, ThemeService } from '../../services';
import { AuthenticationService } from '../../../auth-page/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    public themeService: ThemeService,
    private sortService: SortService,
    private authService: AuthenticationService,
  ) {}

  ngOnInit(): void {}

  filterValue(evt: Event) {
    console.log(this.sortService.inputValue);
    if (evt.target instanceof HTMLInputElement) {
      this.sortService.inputValue = evt.target.value;
    }
  }
}
