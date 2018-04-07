import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderReadyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-ready',
  templateUrl: 'order-ready.html',
})
export class OrderReadyPage {
  announcement : any;
  constructor( public parameters: NavParams, public alertCtrl: AlertController,  public navCtrl: NavController, public navParams: NavParams) {
    this.announcement = this.parameters.get("announcement");
  }
}
