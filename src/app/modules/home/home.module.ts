import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { MiddleSectionComponent } from './components/middle-section/middle-section.component';
import { BotSectionComponent } from './components/bot-section/bot-section.component';

@NgModule({
  declarations: [HomePageComponent, TopSectionComponent, MiddleSectionComponent, BotSectionComponent],
  imports: [CommonModule, MaterialModule, HomeRoutingModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
