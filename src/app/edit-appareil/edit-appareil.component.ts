import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultStatut = 'éteint';

  constructor(private appareilService: AppareilService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form.value);
    const name = form.value.name;
    const statut = form.value.statut;

    this.appareilService.addAppareil(name,statut);
    this.router.navigate(["/appareils"]);
  }
}
