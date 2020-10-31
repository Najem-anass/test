import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view-componant',
  templateUrl: './appareil-view-componant.component.html',
  styleUrls: ['./appareil-view-componant.component.scss']
})
export class AppareilViewComponantComponent implements OnInit {

  appareils: any;
  appareilSubscription;

  constructor(private appareilService: AppareilService) { }

  date = new Date();

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (value : any[]) => {this.appareils = value}
    );

    this.appareilService.emitAppareilSubject();
  }

  onAllumeTout() {
    this.appareilService.onSwitchOnAll();
  }

  onEteintTout() {
    this.appareilService.onSwitchOffAll();
  }


}
