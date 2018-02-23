import { Injectable } from '@angular/core';
import {AlertController} from "ionic-angular";

@Injectable()
export class AddonsProvider {

  constructor(public alertCtrl : AlertController) {
  }

  showAlert(message) {
      let alert = this.alertCtrl.create({
        subTitle: message,
        buttons: ['OK']
      });
      alert.present();
    }
}
