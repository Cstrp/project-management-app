import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
