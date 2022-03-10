
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { FetchShipResponse, starship } from '../interfaces/shipswars.interface';


@Injectable({
   providedIn: 'root'
})

export class ShipslitsService {


   private url: string = 'https://swapi.dev/api/starships/';

   constructor(private http: HttpClient) { }


   getAllShips( ): Observable<starship[]> {

      return this.http.get<FetchShipResponse>(`${this.url}?page=1`)
            .pipe( 
               map( this.transBigStarShipsToStarship )
            )
      }

      private transBigStarShipsToStarship( resp:FetchShipResponse ): starship[] {

         const starShipList: starship [] =  resp.results.map( ship => {
            return {
               name: ship.name,
               model: ship.model
            }
         }
      );
      return starShipList;

   }





   // Starships
   // A Starship resource is a single transport craft that has hyperdrive capability.
   // 
   // Endpoints
   // 
   // /starships/ -- get all the starship resources
   // /starships/:id/ -- get a specific starship resource
   // /starships/schema/ -- view the JSON schema for this resource
   // /starships/?page=1 -- hay varias páginas
}
 