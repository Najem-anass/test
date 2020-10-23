import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-signle-appareil',
  templateUrl: './signle-appareil.component.html',
  styleUrls: ['./signle-appareil.component.scss']
})
export class SignleAppareilComponent implements OnInit {

  name ='appareil';
  statut = 'statut';

  constructor(private appareilService : AppareilService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.statut = this.appareilService.getAppareilById(+id).statut;
  }

}
