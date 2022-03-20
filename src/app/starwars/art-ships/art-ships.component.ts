import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShipslitsService } from '../services/shipslits.service';
import { starship } from '../interfaces/shipswars.interface';


@Component({
  selector: 'app-art-ships',
  templateUrl: './art-ships.component.html',
  styleUrls: ['./art-ships.component.sass']
})

export class ArtShipsComponent implements OnInit {

   public starships: starship [] = [];
   regex = /(\d+)/g ;
   idShip: any = '';

   constructor(  private  shipslitsService: ShipslitsService,
                  private route: Router  ) { }

   ngOnInit(): void {
         this.shipslitsService.getAllShips()
            .subscribe( ships => {
               // console.log(ships);
               this.starships =  ships;
            });
            
   }

   myShip( e: Event ): void {
      const value = e.currentTarget as HTMLOListElement ;
      this.idShip = value.children[0].textContent!.match(this.regex)!;
      this.route.navigate(['/card', Number(this.idShip) ]);
      // console.log( value.children[0].textContent );
      // console.log(this.starships);  
   }


   moreShips() {
      
      let x = Number(this.shipslitsService.idPage);
      if (  x < 4) {
         this.shipslitsService.idPage = (x + 1).toString();
      } else {
         this.shipslitsService.idPage = '1';
      };
   
      this.shipslitsService.getAllShips()
      .subscribe( ships => {
         this.starships =  ships;
      });
   }


   
}
