import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;

  constructor(private userService : UserService,
              private formbuilder : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formbuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['', Validators.email],
      drinkPreferer : ['',Validators.required],
      hobbies : this.formbuilder.array([])
    })
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue.firstName,
      formValue.lastName,
      formValue.email,
      formValue.drinkPreferer,
      formValue.hobbies
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users-list']);
  }

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newhobbyControl = this.formbuilder.control('',Validators.required);
    this.getHobbies().push(newhobbyControl);
  }

}
