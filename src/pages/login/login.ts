import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';

import {HomePage} from "../home/home";

import { SignUpPage }  from "../sign-up/sign-up";
import { PasswordResetPage } from '../password-reset/password-reset';
import { AddonsProvider } from '../../providers/addons/addons';
import { AccountProvider } from '../../providers/account/account';
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

  constructor(public account : AccountProvider , public addon : AddonsProvider, public events: Events, public alertCtrl: AlertController,public navParams: NavParams, public navigator : NavController) {}

  signin(){
    this.addEventListener(); // animations and error coordination
    this.account.signin(this.signinData);
  }
  addEventListener(){
    $(".button-signin").addClass("m-progress") //part of the animation
      this.events.subscribe("signinevent",(results)=>{ //listening for changes in the signup chain
        this.events.unsubscribe("signinevent");
        if(results != "success"){
          this.addon.showAlert(results);
        }
        else{
          this.gotoHome();
        }
        $(".button-signin").removeClass("m-progress") //part of the animation

    })
  }
  gotoHome(){
    this.navigator.setRoot(HomePage);
  }
  gotoSignup(){this.navigator.push(SignUpPage)}
  gotoForgotPassword(){this.navigator.push(PasswordResetPage)}
}
