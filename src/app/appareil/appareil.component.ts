import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatut: string;
  @Input() indexOfAppareil:number;
  @Input() id:number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }

  getColor(){
    if(this.appareilStatut==="éteint"){
      return "red";
    }
    else {
      return "green";
    }
  }

  onAllume(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onEteint(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
