import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule
  ],
  exports: [
    ArtShipsComponent,
  ]
})

export class StarwarsModule { }
