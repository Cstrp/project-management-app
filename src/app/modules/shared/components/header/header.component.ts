import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuState: EventEmitter<boolean> = new EventEmitter<boolean>();

  visible: boolean;

  constructor() {}

  ngOnInit(): void {}

  showSidebar(): void {
    this.visible = !this.visible;
    this.menuState.emit(this.visible);
  }
}
