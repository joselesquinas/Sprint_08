
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { FetchShipResponse, starship, cardShip } from '../interfaces/shipswars.interface';


@Injectable({
   providedIn: 'root'
})

export class ShipslitsService {

   private url      : string = 'https://swapi.dev/api/starships/';
   public idPage    : string = '1';
   public idCardShip: string = '0';
  // params = new HttpParams().set('?page=', '1');

   constructor(private http: HttpClient) { }


   getAllShips(): Observable<starship[]> {
      return this.http.get<FetchShipResponse>(`${this.url}?page=${this.idPage}`)
      .pipe( 
         map( this.transBigStarShipsToStarship )
      )

   }

   private transBigStarShipsToStarship( resp:FetchShipResponse ): starship[] {
      const starShipList: starship [] =  resp.results.map( ship => {
         return {
            name                   : ship.name,
            model                  : ship.model,
            url                    : ship.url,
         }
      });
      return starShipList;
   }

   getCardShip(  ): Observable<cardShip[]> {

      const url = `${this.url}${this.idCardShip}/`;
      let myCard =  this.http.get<cardShip[]>( url );
      return myCard;


      //  return this.http.get<cardShip[]>( url ) ;
    }

/*
   getCardShip(): Observable<cardShip[]> {
      return this.http.get<FetchShipResponse>(`${this.url}${this.idCardShip}/`)
      .pipe( 
         map( this.transShipsToCard )
      )
   }

   private transShipsToCard( resp: FetchShipResponse ): cardShip[] {
      const cardList cardShip [] =  resp.results.map!( card => {
         return {
            name                   : card.name,
            model                  : card.model,
            manufacturer           : card.manufacturer,
            cost_in_credits        : card.cost_in_credits,
            length                 : card.length,
            max_atmosphering_speed : card.max_atmosphering_speed,
            crew                   : card.crew,
         }
      });
      return cardList;
   }
*/

   // Starships
   // https://starwars-visualguide.com/#/starships/15
   //  https://starwars-visualguide.com/assets/img/starships/9.jpg
   //https://swapi.py4e.com/documentation#schema
   // 
   // /starships/ -- get all the starship resources
   // /starships/:id/ -- get a specific starship resource
   // /starships/schema/ -- view the JSON schema for this resource
   // /starships/?page=1 -- hay varias páginas (4)
}
 