import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
// Firebase modules
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { auth } from 'firebase';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const appRoutes : Routes = [
  {path:""    , component : AppareilViewComponent},
  {path:"appareils" , component : AppareilViewComponent},
  {path:"appareils/:id",component:SingleAppareilComponent},
  {path:"auth"  ,   component : AuthComponent}
];

const firebaseConfig = {
    apiKey: "AIzaSyCVU3WBb9PHhLfV3DpscgHKQtSWNT5wmRI",
    authDomain: "angular-ff931.firebaseapp.com",
    databaseURL: "https://angular-ff931.firebaseio.com",
    projectId: "angular-ff931",
    storageBucket: "angular-ff931.appspot.com",
    messagingSenderId: "826551300337",
    appId: "1:826551300337:web:57de10a4a6c7d78c6ef950",
    measurementId: "G-K20JXRS2N4"
  };

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, 'angular-ff931'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],

  providers: [
    AppareilService,
    AuthService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){}

}
