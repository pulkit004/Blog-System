import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DescriptionPageComponent } from './description-page/description-page.component';

const firebaseConfig = {
  apiKey: 'AIzaSyC1nvcT1yvQWIP9o4RLs-haxSgNl5hmlTc',
  authDomain: 'firestore-f5cfc.firebaseapp.com',
  databaseURL: 'https://firestore-f5cfc.firebaseio.com',
  projectId: 'firestore-f5cfc',
  storageBucket: 'firestore-f5cfc.appspot.com',
  messagingSenderId: '292050954122'
};

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    LandingPageComponent,
    DescriptionPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
