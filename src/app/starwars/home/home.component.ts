import { Component, OnInit } from '@angular/core';

import { LoginoutService } from '../services/loginout.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor( private loginoutService: LoginoutService ) { }

  ngOnInit(): void {
  }


  verificarAcceso(){
    // this.loginoutService.grabar_localStorage();
    // this.loginoutService.obtener_localstorage();
  }

}
