import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  appareilSubscription : Subscription;

  constructor(private appareilService: AppareilService) { }


  date = new Date();

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (value : any[]) => {this.appareils = value;}
    );

    this.appareilService.emitAppareilSubject();
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
