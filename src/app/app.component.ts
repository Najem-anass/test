import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
