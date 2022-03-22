import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  

  constructor( private route: Router  ) { }

  ngOnInit(): void { }

  login() {
    // this.route.navigate(['/card', Number(this.idShip) ]);
    this.route.navigate([ '/auth/login' ]);
  }


  signUp() {
    this.route.navigate([ '/auth/registro' ]);
  }

}
