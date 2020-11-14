import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : User[];
  userSubscription : Subscription;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (user:User[]) => {this.users=user}
    )

    this.userService.emitUser();
  }


}
