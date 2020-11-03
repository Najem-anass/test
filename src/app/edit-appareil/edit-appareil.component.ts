import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultStatut = "éteint";
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form.value);
  }

}
