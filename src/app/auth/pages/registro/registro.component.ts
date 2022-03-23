import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})

export class RegistroComponent implements OnInit {

  key: string = '';

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: [ '', [Validators.required, Validators.pattern( this.validatorService.emailPattern ) ] ],
    username: [ '', [Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password: [ '', [Validators.required, Validators.minLength(6)] ],
    password2: [ '', [Validators.required ] ],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  })

  constructor( private fb: FormBuilder, 
               private validatorService: ValidatorService,
               private registroService: RegistroService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {

    console.log( this.miFormulario.value );

    this.miFormulario.markAllAsTouched();
  }


  guardar() {
    if ( this.miFormulario.invalid) { 
      this.miFormulario.markAllAsTouched();
      return;
    }

    let registroForm = {
      nombre    : this.miFormulario.controls['nombre'].value,
      email     : this.miFormulario.controls['email'].value,
      username  : this.miFormulario.controls['username'].value,
      password  : this.miFormulario.controls['password'].value,
      password2 : this.miFormulario.controls['password2'].value,   
    }
 
    this.key = this.miFormulario.controls['email'].value;

    this.registroService.grabar_LocalStorage( this.key, registroForm );
    this.miFormulario.reset();

    return false;

  }


}
