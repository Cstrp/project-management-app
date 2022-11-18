import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './modules/shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project-management-app';

  public darkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.darkTheme = this.themeService._darkTheme$$;
  }
}
