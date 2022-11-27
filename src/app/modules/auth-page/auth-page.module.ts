import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { _httpInterceptorProvider } from '../../constants';
import { MaterialModule } from '../shared/material/material.module';
import { SupPannelComponent } from './components/sign-in/sup-pannel/sup-pannel.component';
import { PasswordInputComponent } from './components/sign-in/password-input/password-input.component';
import { ActionsBtnComponent } from './components/sign-in/actions-btn/actions-btn.component';
import { SignUpTitleComponent } from './components/sign-up/sign-up-title/sign-up-title.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/auth/auth.effects';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SupPannelComponent,
    PasswordInputComponent,
    ActionsBtnComponent,
    SignUpTitleComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [_httpInterceptorProvider],
  exports: [AuthRoutingModule],
})
export class AuthPageModule {}
