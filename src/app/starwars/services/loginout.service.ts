import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginoutService {

  constructor(  ) { 
    this.grabar_localStorage();

  }

  grabar_localStorage(){
    let acceso = {
        nombre: "Jose",
        passwod: "12345678",
    }
    localStorage.setItem( "acceso", JSON.stringify( acceso ) );
  }

  obtener_localstorage() {
    let acceso = localStorage.getItem("acceso");
    console.log(acceso);
  }


}
