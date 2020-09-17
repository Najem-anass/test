import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view-componant',
  templateUrl: './appareil-view-componant.component.html',
  styleUrls: ['./appareil-view-componant.component.scss']
})
export class AppareilViewComponantComponent implements OnInit {

  appareils: any;

  constructor(private appareilService: AppareilService) { }

  date = new Date();

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumeTout() {
    this.appareilService.onSwitchOnAll();
  }

  onEteintTout() {
    this.appareilService.onSwitchOffAll();
  }


}
