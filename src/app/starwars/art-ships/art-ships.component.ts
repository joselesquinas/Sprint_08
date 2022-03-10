import { Component, OnInit } from '@angular/core';

import { ShipslitsService } from '../services/shipslits.service';
import { starship } from '../interfaces/shipswars.interface';


@Component({
  selector: 'app-art-ships',
  templateUrl: './art-ships.component.html',
  styleUrls: ['./art-ships.component.sass']
})

export class ArtShipsComponent implements OnInit {

   public starships: starship [] = [];

  constructor(  private  shipslitsService: ShipslitsService  ) { }

  ngOnInit(): void {
      this.shipslitsService.getAllShips()
         .subscribe( ships => {
            this.starships =  ships;

         });
   }

   
}
