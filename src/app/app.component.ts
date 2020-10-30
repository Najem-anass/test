import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes : number;


  constructor() {}

  ngOnInit() {
    
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value : number) => {this.secondes=value;},
      (error:any) => {console.log('error');},
      () => {console.log('complete');}
    );
  }

}
