import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StarwarsRoutingModule } from './starwars-routing.module';

import { ArtCardComponent } from './pages/art-card/art-card.component';
import { ArtPresnComponent } from './pages/art-presn/art-presn.component';
import { ArtShipsComponent } from './pages/art-ships/art-ships.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ArtCardComponent,
    ArtPresnComponent,
    ArtShipsComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    StarwarsRoutingModule,

  ],
  exports: [

  ]
})

export class StarwarsModule { }
