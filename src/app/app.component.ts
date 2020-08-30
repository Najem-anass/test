import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appareils : any[];

  constructor(private appareilService:AppareilService) {

  }
  ngOnInit() {
   this.appareils=this.appareilService.appareils;
  }

  onAllumeTout(){
    this.appareilService.switchOnAll();
  }

  onEteindreTout(){
    this.appareilService.switchOffAll();
  }

  date = new Date();

}
