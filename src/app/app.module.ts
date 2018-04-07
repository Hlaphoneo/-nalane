import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database-deprecated';

import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Firebase } from '@ionic-native/firebase';




import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
import { OrderReadyPage } from '../pages/order-ready/order-ready';
import { LoginPage } from '../pages/login/login';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { RegistrationPage } from '../pages/registration/registration';
import { MyApp } from './app.component';


import { DataProvider } from '../providers/central/central';
import { AppProvider } from '../providers/app/app';
import { UserProvider } from '../providers/user/user';
import { FirebasepushProvider } from '../providers/firebasepush/firebasepush';
import { AuthenticationProvider } from '../providers/authentication/authentication';



export const firebaseConfig = {
  apiKey: "AIzaSyCbnN54Pu9fgj8eHvQ6DaHGvcRnyQMSFy4",
  authDomain: "nalane-032018.firebaseapp.com",
  databaseURL: "https://nalane-032018.firebaseio.com",
  projectId: "nalane-032018",
  storageBucket: "",
  messagingSenderId: "571721946584"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    OrderReadyPage,
    LoginPage,
    PasswordResetPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartPage,
    OrderReadyPage,
    LoginPage,
    PasswordResetPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    AndroidFullScreen,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AppProvider,
    UserProvider,
    Firebase,
    FirebasepushProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
