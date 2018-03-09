import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController  } from 'ionic-angular';
import { PasswordResetPage } from '../password-reset/password-reset';
import { AddonsProvider } from '../../providers/addons/addons';
import { AccountProvider } from '../../providers/account/account';

import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signupEvent : any
  signupData = {
      fullname  :'',
      email     :'',
      password  :'',
      phone     :'',
      uid       :''
  }
  constructor(public account : AccountProvider, public addon: AddonsProvider, public alertCtrl: AlertController, public events : Events, public navCtrl: NavController, public navParams: NavParams , public navigator : NavController) {
  }

  signup(){
      if(this.validate()){ //validates fullname and phone
        this.addEventListener(); //controls animations
        this.account.signup(this.signupData);
      }
  }
  validate(){
    if(this.signupData.fullname == ""){
        this.addon.showAlert("Please enter your name.");
        return false;
      }
    if(this.signupData.phone == ""){
      this.addon.showAlert("Please enter phone number.")
      return false;
    }
    return true;
  }
  addEventListener(){
    $(".button-signin").addClass("m-progress") //part of the animation
      this.events.subscribe("signupevent",(results)=>{ //listening for changes in the signup chain
        this.events.unsubscribe("signupevent");
        if(results != "success"){
          this.addon.showAlert(results)
        }
        $(".button-signin").removeClass("m-progress") //part of the animation
    })
  }
  gotoForgotPassword(){this.navigator.push(PasswordResetPage)}
}
