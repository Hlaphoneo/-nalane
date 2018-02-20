import { Component, ViewChild } from '@angular/core';
import { Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';

//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//components
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { NewOrderPage } from '../pages/new-order/new-order';
import { OrderReadyPage } from '../pages/order-ready/order-ready';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController;
  rootPage:any = OrderReadyPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    //
    // this.navCtrl.setRoot(OrderPage)

  }
}
