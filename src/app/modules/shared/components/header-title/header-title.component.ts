import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
})
export class HeaderTitleComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
