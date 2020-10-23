import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuth = false;
  constructor(private route : Router) { }

  connecte(){
    this.isAuth=true;
    this.route.navigate(["appareils"]);
  }

  deconnecte(){
    this.isAuth = false;
  }

}
