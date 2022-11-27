import { Component, OnInit } from '@angular/core';
import { SortService, ThemeService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(public themeService: ThemeService, private sortService: SortService) {}

  ngOnInit(): void {}

  filterValue(evt: Event) {
    console.log(this.sortService.inputValue);
    if (evt.target instanceof HTMLInputElement) {
      this.sortService.inputValue = evt.target.value;
    }
  }
}
