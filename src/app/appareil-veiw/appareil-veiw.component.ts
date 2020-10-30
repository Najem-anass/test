import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-veiw',
  templateUrl: './appareil-veiw.component.html',
  styleUrls: ['./appareil-veiw.component.scss']
})
export class AppareilVeiwComponent implements OnInit {

    //attrubits
  date = new Date();
  appareilSubscription : Subscription;
  appareilsList: any[];

  constructor(private appareilService: AppareilService) {}


  ngOnInit() {

    //start listening before creation of the emission
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (receivedData:any[]) => {this.appareilsList = receivedData}
    );

    //emission
    this.appareilService.emitAppareilSubject();
  }

  onAllumeTout() {
    this.appareilService.switchOnAll();
  }

  onEteindreTout() {
    this.appareilService.switchOffAll();
  }

}
