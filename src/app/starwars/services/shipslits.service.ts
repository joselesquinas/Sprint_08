
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
   providedIn: 'root'
})

export class ShipslitsService {


   private url: string = 'https://swapi.dev/api/starships/';

   constructor(private http: HttpClient) { }


   getAllShips() {
     return this.http.get(` ${this.url}?page=1`); // definicion de un observable 


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
 