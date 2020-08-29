import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatut: string;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if(this.appareilStatut==="eteint"){
      return "red";
    }
    else {
      return "green";
    }
  }

  onAllume(){
    this.appareilStatut='allumé';
  }

  onEteint(){
    this.appareilStatut='eteint';
  }

}
