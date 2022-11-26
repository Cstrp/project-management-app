import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { _httpInterceptorProvider } from '../../constants';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule, ReactiveFormsModule, MaterialModule],
  providers: [_httpInterceptorProvider],
  exports: [AuthRoutingModule],
})
export class AuthPageModule {}
