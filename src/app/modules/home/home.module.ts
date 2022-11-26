import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { MiddleSectionComponent } from './components/middle-section/middle-section.component';
import { BotSectionComponent } from './components/bot-section/bot-section.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomePageComponent, TopSectionComponent, MiddleSectionComponent, BotSectionComponent, CardComponent],
  imports: [CommonModule, MaterialModule, HomeRoutingModule, SharedModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
