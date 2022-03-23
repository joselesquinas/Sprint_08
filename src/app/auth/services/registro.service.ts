import { Injectable } from '@angular/core';


import { Forms } from '../interfaces/forms';


@Injectable({
  providedIn: 'root'
})


export class RegistroService {

  key: string = '';
  registro: Forms[] = [];

  constructor() { }



  obtener_LocalStorage(): any {
    try {
      return localStorage.getItem(this.key);
    } catch (e) {
      console.log(e);
    }
  }

  grabar_LocalStorage(newId: string, data: any): void {
    try {
      this.registro.push(data);
      localStorage.setItem(newId, JSON.stringify(this.registro));
    } catch (e) {
      console.log(e);
    }
  }


}
