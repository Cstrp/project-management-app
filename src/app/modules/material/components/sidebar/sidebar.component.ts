import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavService } from '../../../shared/services/sidenav.service';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private sidenavService: SidenavService,
  ) {}

  ngOnInit(): void {}

  async ngAfterViewInit(): Promise<void> {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });

    this.sidenavService.setSidenav(this.sidenav);
  }
}
