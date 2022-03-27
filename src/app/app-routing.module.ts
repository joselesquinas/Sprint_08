import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ArtShipsComponent } from './starwars/pages/art-ships/art-ships.component';
// import { ArtCardComponent } from './starwars/pages/art-card/art-card.component';
import { HomeComponent } from './starwars/pages/home/home.component';

const routes: Routes = [
 ///  {
 ///    path: 'home',
 ///    component: HomeComponent,
 ///  },
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( m => m.AuthModule ),
  },
  {
    path: 'starwars',
    loadChildren: () => import( './starwars/starwars.module').then( m => m.StarwarsModule )
  },
  {  
    path: '**',
    redirectTo: '404'
  }
];
 

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
