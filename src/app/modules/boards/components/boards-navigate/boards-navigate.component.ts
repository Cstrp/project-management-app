import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddBoardModalComponent } from '../add-board-modal';

@Component({
  selector: 'app-boards-navigate',
  templateUrl: './boards-navigate.component.html',
  styleUrls: ['./boards-navigate.component.scss'],
})
export class BoardsNavigateComponent implements OnInit {
  constructor(public matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  public navigateToBoards(): void {
    this.router.navigateByUrl('boards');
  }

  public addNewBoard(): void {
    this.matDialog.open(AddBoardModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }
}
