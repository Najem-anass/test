import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];

  constructor(private appareilService: AppareilService) { }


  date = new Date();

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumeTout() {
    console.log("click onAllumeTout");
    this.appareilService.switchOnAll();
  }

  onEteintTout() {
    console.log("click onEteintTout");
    this.appareilService.switchOffAll();
  }


}
