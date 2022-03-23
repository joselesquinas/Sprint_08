import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: [ '',  ],
    password: [ '', ],

  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  submitLogin() {

  }





  
}
