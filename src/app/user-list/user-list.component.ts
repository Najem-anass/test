import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];
  userSbscription: Subscription;

  ngOnInit(): void {

      this.userSbscription = this.userService.userSubject.subscribe(
        (user: User[]) => { this.users = user }
      )
      this.userService.emitUser();
    
  }
}
