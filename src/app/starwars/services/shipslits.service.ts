
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

    }
}
 