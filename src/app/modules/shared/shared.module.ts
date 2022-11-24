import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Random_positionDirective } from './directives/random_position.directive';
import { Random_colorDirective } from './directives/random_color.directive';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { BoardsModule } from '../boards';
import { StoreModule } from '@ngrx/store';
import { APP_THEME_FEATURE, themeReducer } from '../../store/app/theme/theme.reducer';
import { ThemeEffect } from '../../store/app/theme/theme.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    Random_positionDirective,
    Random_colorDirective,
    ScrollAnimationDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoardsModule,
    EffectsModule.forFeature([ThemeEffect]),
    StoreModule.forFeature(APP_THEME_FEATURE, themeReducer),
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    Random_positionDirective,
    Random_colorDirective,
    ScrollAnimationDirective,
    MaterialModule,
  ],
})
export class SharedModule {}
