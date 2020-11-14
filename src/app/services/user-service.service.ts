import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User[]=[{
    firstName       : "Anass",
    lastName        : "Najem",
    email           : "anass@najem.com",
    boissonPreferer : "Café",
    hobbies         : ["lire","ecrire"]
  }];

  userSubject = new Subject<User[]>();

  constructor() { }

  emitUser(){
    this.userSubject.next(this.user.slice());
  }

  addUser(user:User){
    const newUser = user;
    this.user.push(newUser);
  }

}
