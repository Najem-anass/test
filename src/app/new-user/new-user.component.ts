import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit {

  userForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder,
              private userService : UserServiceService,
              private router : Router ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm= this.formBuilder.group({
      firstName : "",
      lastName : "",
      email : "",
      boissonPreferer : ""
    });
  }
  
  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue.firstName,
      formValue.lastName,
      formValue.email,
      formValue.boissonPreferer
    );

    this.userService.addUser(newUser);
    this.userService.emitUsers();
    this.router.navigate(["users"]);
  }

}
