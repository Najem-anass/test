import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus : boolean;

  constructor(private authServiceService : AuthServiceService , private router : Router ) { }

  ngOnInit(): void {
    this.authStatus=this.authServiceService.isAuth;
  }

  onConnect(){
    this.authStatus=true;
    this.authServiceService.signIn();
    this.router.navigate(['appareils']);
  }
  
  onDeconnect(){
    this.authStatus=false;
    this.authServiceService.signOut();
  }

}
