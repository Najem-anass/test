import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] =[
    {
      firstName : 'James',
      lastName : 'Smith',
      email : 'james.smith@gmail.com',
      drinkPreferer : 'coca',
      hobbies : [
        'coder',
        'lire'
      ]
    }
  ];
  
  userSubject =new Subject<User[]>();

  constructor() { }

  emitUser(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user : User){
    this.users.push(user);
    this.emitUser();
  }
}
