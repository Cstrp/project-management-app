import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ComingSoonComponent } from '../shared/components/coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'settings', component: ComingSoonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
