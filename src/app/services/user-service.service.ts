import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userSubject = new Subject<User[]>();

  private users: User[] = [
    {
      firstName: "anass",
      lastName: "najem",
      email: "hey@bye.com",
      boissonPreferer: "Coca",
      hobbies: ["lire", "coder"]
    }
  ];

  constructor() { }

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

}
