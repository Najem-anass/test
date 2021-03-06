import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observable, Subscription } from 'rxjs/Rx';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes : number ;
  counterSubscription : Subscription; 

  constructor() { }

  ngOnInit(): void {

    const counter = Observable.interval(1000);

    this.counterSubscription = counter.subscribe(
      (value : number) => {this.secondes = value;}
      );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
  
}
