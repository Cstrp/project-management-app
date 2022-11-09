import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoardModalComponent } from './components';
import { BoardsPageComponent } from './components/boards-page';

const routes: Routes = [
  { path: '', component: BoardsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
