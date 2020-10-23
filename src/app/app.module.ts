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
import { AppareilViewComponantComponent } from './appareil-view-componant/appareil-view-componant.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
import { SinglAppareilComponent } from './singl-appareil/singl-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: "", component: AppareilViewComponantComponent },
  { path: "appareils", canActivate : [AuthGuardService] , component: AppareilViewComponantComponent },
  { path: "appareils/:id", canActivate : [AuthGuardService] , component:SinglAppareilComponent},
  { path: "auth", component: AuthComponent },
  { path: "not-found" , component : FourOhFourComponent},
  { path: "**" , redirectTo : "/not-found"}
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
    AppareilViewComponantComponent,
    AuthComponent,
    SinglAppareilComponent,
    FourOhFourComponent
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
    AuthServiceService,
    AuthGuardService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
