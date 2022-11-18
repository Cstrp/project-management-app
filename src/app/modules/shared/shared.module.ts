import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Random_positionDirective } from './directives/random_position.directive';
import { Random_colorDirective } from './directives/random_color.directive';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { ThemeDirective } from './directives/theme.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    Random_positionDirective,
    Random_colorDirective,
    ScrollAnimationDirective,
    ThemeDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    Random_positionDirective,
    Random_colorDirective,
    ScrollAnimationDirective,
  ],
})
export class SharedModule {}
