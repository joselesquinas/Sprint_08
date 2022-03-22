import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }


  verificarAcceso(){
    // this.loginoutService.grabar_localStorage();
    // this.loginoutService.obtener_localstorage();
  }

}
