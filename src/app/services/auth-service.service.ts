import { Injectable } from '@angular/core';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuth=false;
  
  constructor() { }

  signIn(){
    console.log("log in");
    this.isAuth=true;
  }

  signOut(){
    console.log("log out");
    this.isAuth=false;
  }
}
