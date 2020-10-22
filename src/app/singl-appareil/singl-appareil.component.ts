import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-singl-appareil',
  templateUrl: './singl-appareil.component.html',
  styleUrls: ['./singl-appareil.component.scss']
})
export class SinglAppareilComponent implements OnInit {

  name = "Appareil";
  status = "Status";

  constructor(private Route : ActivatedRoute,
              private appareilService : AppareilService) { }

  ngOnInit(){
    const id = this.Route.snapshot.params['id'];
    this.name=this.appareilService.getAppareilById(+id).name;
    this.status=this.appareilService.getAppareilById(+id).statut;
  }

}
