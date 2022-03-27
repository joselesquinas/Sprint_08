import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-presn',
  templateUrl: './art-presn.component.html',
  styleUrls: ['./art-presn.component.sass']
})
export class ArtPresnComponent implements OnInit {

  constructor(  private router: Router ) { }

  ngOnInit(): void {
  }

  irLogin() {
    this.router.navigate(['./auth/login']);
  }

}
