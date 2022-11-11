import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BoardsModule } from '../boards';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, BoardsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
