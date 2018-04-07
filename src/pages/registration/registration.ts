import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { HomePage } from "../home/home";
import { AlertController } from 'ionic-angular';

import * as $ from 'jquery';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  phone  :  any;
  subs   : any;
  constructor(public alertCtrl : AlertController, public events : Events, public app : AppProvider, public navCtrl: NavController, public navParams: NavParams) {}

  registerNumber(){
    if(this.phone == null){
      this.error('Please enter phone.')
      return;
    }
    if(isNaN(this.phone) || this.phone.length != 10){
      this.error('Please enter valid phone.')
      return;
    }
    $(".button-signin").addClass("m-progress") //part of the animation
    this.app.register(this.phone);
    this.subs = this.events.subscribe("registration::true",()=>{
          setTimeout(()=>{
            this.showAlert();
            $(".button-signin").removeClass("m-progress") //part of the animation
        }, 4000);
    })
  }
  showAlert(){
    let alert = this.alertCtrl.create({
      subTitle: 'Number successfuly registered, Thank You!.',
      buttons: [
              {
                  text: 'OK',
                  handler: data => {
                    this.navCtrl.push(HomePage);
                  }
                }
              ]
            });
        alert.present();
  }
  error(message : string){
    let alert = this.alertCtrl.create({
      subTitle: message,
      buttons: [
              {
                  text: 'OK',
                  handler: data => {
                  }
                }
              ]
            });
        alert.present();
  }

}
