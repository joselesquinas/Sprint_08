import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './starwars/home/home.component';
import { ArtShipsComponent } from './starwars/art-ships/art-ships.component';
import { ArtCardComponent } from './starwars/art-card/art-card.component';



const routes: Routes = [
  {
    path:'',
    component:  HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'ships',
    component: ArtShipsComponent,
  },
  {
    path: 'card/:idShip',
    component: ArtCardComponent,
  },
  {  
    path: '**',
    redirectTo: ''
 },


];
 


@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})


export class AppRoutingModule { }
