import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegistroService } from '../../services/registro.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  keyLogin   : string = '';
  keyPassword: string = '';

  miFormulario: FormGroup = this.fb.group({
    email: [ '', [Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    password: [ '', [Validators.required, Validators.minLength(6)] ],

  });

  constructor(  private fb: FormBuilder, 
                private validatorService: ValidatorService,
                private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    // console.log( this.miFormulario.value );
    this.miFormulario.markAllAsTouched();
  }

  
  estaLogin( key: string ) {
    if ( localStorage.getItem( this.keyLogin) === null ) {
       //console.log('NO Esta creada la key: ' + this.keyPtto);
       alert("Te tienes que registrar");

    } else {

      this.registroService.obtener_LocalStorage();

      if ( this.keyLogin === 'test1@test.com' 
              && this.keyPassword === '') {};
      console.log(this.keyLogin);
      alert('esta logeado');
    }

 }

  submitLogin() {
    this.keyLogin = this.miFormulario.controls['email'].value;
    this.keyPassword = this.miFormulario.controls['password'].value;
    this.estaLogin ( this.keyLogin );


    this.miFormulario.reset();
    // this.registroService.obtener_LocalStorage
    
  }





  
}
