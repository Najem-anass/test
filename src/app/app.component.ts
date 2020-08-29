import { Component, OnInit, OnDestroy} from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  appareils=[
    {name:"tele" , statut:"allumé"},
    {name:"phone" , statut:"allumé"},
    {name:"frigo" , statut:"eteint"}
  ];

  date = new Date();

}
