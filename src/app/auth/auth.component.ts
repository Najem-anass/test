import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService , private router : Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onConnecte() {
    this.authService.connect()
    this.authStatus = this.authService.isAuth;
    console.log(this.authStatus);
    this.router.navigate(['appareils']);
  }

  onDeconnecte() {
    console.log("dans on deconnecte");
    this.authService.deconnect();
    this.authStatus = this.authService.isAuth;
  }

}
