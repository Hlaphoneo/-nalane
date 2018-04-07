import { Component} from '@angular/core';
import { Platform , Events} from 'ionic-angular';

//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';


//components
import { HomePage } from '../pages/home/home';
import {OrderReadyPage } from "../pages/order-ready/order-ready";

import { StartPage } from '../pages/start/start';
import { RegistrationPage } from '../pages/registration/registration';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any; //starting page of the application
  constructor(public androidFullScreen: AndroidFullScreen, public events : Events, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.immersiveMode())
      .catch((error: any) => console.log(error));
      this.appStart();
    })
  }
  appStart(){
    this.rootPage = StartPage;
  }
}
