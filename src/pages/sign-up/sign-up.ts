import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PasswordResetPage } from '../password-reset/password-reset';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signupData = {
      fullname  :'',
      email     :'',
      password  :'',
      phone     :''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams , public navigator : NavController) {
    console.log(this.signupData);
  }

  signup(){

  }

  gotoForgotPassword(){this.navigator.push(PasswordResetPage)}

}
