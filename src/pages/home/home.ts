import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import {OrderReadyPage} from "../order-ready/order-ready";

import {ProvidersPage} from "../providers/providers";
import {AccountProvider} from "../../providers/account/account";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gat : any;
  constructor(public modalCtrl : ModalController,public account : AccountProvider, public navCtrl: NavController) { this.gat = "providers";} //default view for segment

  signout(){this.account.signout()}
  search(){}
  selectProvider(){this.navCtrl.push(ProvidersPage)}
  showOrderModal() {
    let modal = this.modalCtrl.create(OrderReadyPage);
    modal.present();
  }

}
