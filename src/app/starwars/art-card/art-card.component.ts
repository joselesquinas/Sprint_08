import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router'

import { ShipslitsService } from '../services/shipslits.service';
import { cardShip } from '../interfaces/shipswars.interface';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.sass']
})

export class ArtCardComponent implements OnInit {

  cardShips: any = [];
  urlId: any = '0';
  
  constructor(  private  shipslitsService: ShipslitsService,
                private _route: ActivatedRoute ) { 

    this.urlId = this._route.snapshot.paramMap.get('idShip') ;
    this.shipslitsService.idCardShip =  this.urlId;
  }

  ngOnInit(): void {
    this.shipslitsService.getCardShip()
    .subscribe(  (card) =>  {
        this.cardShips = Object.entries(card);
        console.log(this.cardShips);
      })
  }   
    // https://starwars-visualguide.com/assets/img/starships/9.jpg
    // this.foto= https://starwars-visualguide.com/assets/img/starships/${urlId}.jpg

}
