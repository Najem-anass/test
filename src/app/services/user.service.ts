import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[]=[{ 
    firstName: 'anass',
    lastName: 'najem',
    email: 'anass@gmail.com',
    drinkPreferer : 'Coca',
    hobbies : ['lire , ecrire, jouer']
  }];

  userSubject = new Subject<User[]>();

  emitUser(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user : User){
    this.users.push(user);
    this.emitUser();
  }

  constructor() { }
  
}
