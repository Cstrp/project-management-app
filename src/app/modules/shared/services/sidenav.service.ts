import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public async open(): Promise<void> {
    await this.sidenav.open();
  }

  public async close(): Promise<void> {
    await this.sidenav.close();
  }

  public async toggle(): Promise<void> {
    await this.sidenav.toggle();
  }
}
