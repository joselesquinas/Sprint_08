import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from './art-card/art-card.component';
import { ArtShipsComponent } from './art-ships/art-ships.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ArtCardComponent,
    ArtShipsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StarwarsModule { }
