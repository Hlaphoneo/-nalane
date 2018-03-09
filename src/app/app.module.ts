import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';



import { AccountProvider } from '../providers/account/account';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { NewOrderPage } from '../pages/new-order/new-order';
import { OrderReadyPage } from '../pages/order-ready/order-ready';
import { LoginPage } from '../pages/login/login';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ProvidersPage } from '../pages/providers/providers';


import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AddonsProvider } from '../providers/addons/addons';
import { AppProvider } from '../providers/app/app';
import { DataProvider } from '../providers/data/data';
import { OrdersProvider } from '../providers/orders/orders';
import { UserProvider } from '../providers/user/user';
import { GpsProvider } from '../providers/gps/gps';
import { RestProvider } from '../providers/rest/rest';


export const firebaseConfig = {
  apiKey: "AIzaSyCTiIF9PkDjMZutGOd4sSgDM-nFizwB_h8",
  authDomain: "washee-6f663.firebaseapp.com",
  databaseURL: "https://washee-6f663.firebaseio.com",
  projectId: "washee-6f663",
  storageBucket: "washee-6f663.appspot.com",
  messagingSenderId: "862344579026"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    OrderReadyPage,
    NewOrderPage,
    LoginPage,
    PasswordResetPage,
    SignUpPage,
    ProvidersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    OrderReadyPage,
    NewOrderPage,
    LoginPage,
    PasswordResetPage,
    SignUpPage,
    ProvidersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider,
    AuthenticationProvider,
    AddonsProvider,
    AppProvider,
    DataProvider,
    OrdersProvider,
    UserProvider,
    GpsProvider,
    RestProvider
  ]
})
export class AppModule {}
