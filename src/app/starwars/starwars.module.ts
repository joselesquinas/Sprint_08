import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from './art-card/art-card.component';
import { ArtShipsComponent } from './art-ships/art-ships.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ArtShipsComponent,
    ArtCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtShipsComponent,
  ]
})
export class StarwarsModule { }
