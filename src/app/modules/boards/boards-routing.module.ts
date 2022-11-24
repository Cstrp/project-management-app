import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdvancedComponent, BoardsPageComponent } from './components';

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
