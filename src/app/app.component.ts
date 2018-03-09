import { Component} from '@angular/core';
import { Platform , Events} from 'ionic-angular';

//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//services
import {AppProvider} from "../providers/app/app";

//components
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { ProvidersPage } from '../pages/providers/providers';
import { OrderPage } from '../pages/order/order';
import { NewOrderPage } from '../pages/new-order/new-order';
import { OrderReadyPage } from '../pages/order-ready/order-ready';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { SignUpPage } from '../pages/sign-up/sign-up';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any; //starting page of the application
  constructor(public events : Events, public app : AppProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      //Configuring some native stuff
      statusBar.styleDefault();
      splashScreen.hide();

      //starting application
      this.appStart()
    });
  }
  appStart(){
    /*  If user is not loggded in listen to the login invent. This is also used to log out the user */
    this.events.subscribe("authenticated",(authentication)=>{
        if(authentication == true)
          this.rootPage = ProvidersPage;
        else{
          this.rootPage = LoginPage;
        }
    })
    this.app.appStart() //Application entry , checks if the user is logged in
  }
}
