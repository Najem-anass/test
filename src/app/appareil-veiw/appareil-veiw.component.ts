import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-veiw',
  templateUrl: './appareil-veiw.component.html',
  styleUrls: ['./appareil-veiw.component.scss']
})
export class AppareilVeiwComponent implements OnInit {

  appareils: any[];

  constructor(private appareilService: AppareilService) {

  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumeTout() {
    this.appareilService.switchOnAll();
  }

  onEteindreTout() {
    this.appareilService.switchOffAll();
  }

  date = new Date();


}
