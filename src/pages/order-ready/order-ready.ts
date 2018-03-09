import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public alertCtrl: AlertController,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderReadyPage');
  }
  cancelOrder() {
  let confirm = this.alertCtrl.create({
    title: 'Are you sure?',
    message: 'If you cancel too many orders, your device might be suspended from the service. ',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log("I made a mistake");
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Cancel');
        }
      }
    ]
  });
  confirm.present();
}

}
