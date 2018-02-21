import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage }  from "../sign-up/sign-up";
import { PasswordResetPage } from '../password-reset/password-reset';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public navigator : NavController) {
  }

  gotoSignup(){this.navigator.push(SignUpPage)}
  gotoForgotPassword(){this.navigator.push(PasswordResetPage)}

}
