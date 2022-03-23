import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegistroService } from '../../services/registro.service';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { Forms } from '../../interfaces/forms.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  keyLogin   : string   = '';
  keyPassword: string   = '';
  myData     : Forms [] = [];
  validoLogin: boolean  = false;

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

  loginNoValido() {
    return this.validoLogin;
  }
  
 
  submitLogin() {
    this.keyLogin    = this.miFormulario.controls['email'].value;
    this.keyPassword = this.miFormulario.controls['password'].value;

    console.log('email entregado  ' + this.keyLogin);
    console.log('Password entregado  ' + this.keyPassword);

    if ( localStorage.getItem( this.keyLogin ) === null ) {
      alert("Te tienes que registrar");

    } else {
     // console.log( "df  "+ this.registroService.obtener_LocalStorage( key )  );
     this.myData = this.registroService.obtener_LocalStorage( this.keyLogin ) ;
     
     // console.log(Object.values(this.myData) ) ;
     for(const [key, value] of Object.entries(this.myData)){
       console.log(key + value.email );
       if ( this.keyLogin === value.email  &&  this.keyPassword === value.password ) {
          console.log(" Esta logeado " );
          this.validoLogin = true;
          this.loginNoValido();
       } else {
          console.log("El Email o el password estan incorrectos " );
       }
     }
    
    };

    this.miFormulario.reset();
    //this.validoLogin = false;
    return false;
  };
  
};
