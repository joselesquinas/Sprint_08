import { Component, OnInit } from '@angular/core';

import { ShipslitsService } from '../services/shipslits.service';


@Component({
  selector: 'app-art-ships',
  templateUrl: './art-ships.component.html',
  styleUrls: ['./art-ships.component.sass']
})
export class ArtShipsComponent implements OnInit {

  constructor(  private  shipslitsService: ShipslitsService  ) { }

  ngOnInit(): void {

   this.shipslitsService.getAllShips()
         .subscribe( resp => {

            console.log( resp );
         });

  }

}
