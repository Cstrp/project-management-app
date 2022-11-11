import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { _httpInterceptorProvider } from '../../constants';
import { _errInterceptorProvider } from '../../constants/_errInterceptorProvider';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule, EffectsModule.forFeature(), ReactiveFormsModule],
  providers: [_httpInterceptorProvider, _errInterceptorProvider],
  exports: [AuthRoutingModule],
})
export class AuthPageModule {}
