import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtCardComponent } from './pages/art-card/art-card.component';
import { ArtPresnComponent } from './pages/art-presn/art-presn.component';
import { ArtShipsComponent } from './pages/art-ships/art-ships.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'presn' , component: ArtPresnComponent },
      { path: 'listado', component: ArtShipsComponent },
      { path: 'card/:idShip', component: ArtCardComponent },
      { path: '**', redirectTo: 'presn' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class StarwarsRoutingModule { }
