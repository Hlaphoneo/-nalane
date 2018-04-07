import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';

import * as $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signinData = {
    email       : "",
    password    : ""
  }

  constructor(public events: Events, public alertCtrl: AlertController,public navParams: NavParams, public navigator : NavController) {}

}
