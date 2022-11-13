import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdvancedComponent } from './components';
import { BoardsPageComponent } from './components/boards-page';

const routes: Routes = [
  { path: 'boards', component: BoardsPageComponent },
  {
    path: 'boards/:id',
    component: BoardAdvancedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
