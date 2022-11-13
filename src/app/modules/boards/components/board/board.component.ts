import { Component, Input, OnInit } from '@angular/core';
import { IBoard } from './models';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { EditBoardModalComponent } from '../edit-board-modal';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteBoardModalComponent } from '../delete-board-modal';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() public board: IBoard;

  constructor(
    private store: Store<IAppState>,
    public matDialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  public openModalEdit(): void {
    this.matDialog.open(EditBoardModalComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
    this.router.navigateByUrl(`boards?edit=${this.board.id}`);
  }

  public openModalDelete(): void {
    this.matDialog.open(DeleteBoardModalComponent, {
      width: '15%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
    this.router.navigateByUrl(`boards?delete=${this.board.id}`);
  }
}
