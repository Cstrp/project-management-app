import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public active: boolean = false;

  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.active = !this.active;
    this.sidenavService.toggle();
  }
}
