import { Injectable } from '@angular/core';


import { Forms } from '../interfaces/forms.interface';


@Injectable({
  providedIn: 'root'
})


export class RegistroService {

  registro: Forms[] = [];

  constructor() { }

  obtener_LocalStorage( key: string  ): any {
    try {
      return JSON.parse(localStorage.getItem( key )!);
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
