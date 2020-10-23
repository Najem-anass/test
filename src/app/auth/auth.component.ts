import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  auth : boolean;
  constructor(private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.auth = this.authService.isAuth;
  }

  onConnecte(){
    console.log("hey");
    this.authService.connecte();
    this.auth = this.authService.isAuth;
  }

  onDeconnecte(){
    console.log("hello");
    this.authService.deconnecte();
    this.auth = this.authService.isAuth;
  }

}
