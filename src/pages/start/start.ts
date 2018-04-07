import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { DataProvider } from '../../providers/central/central';
import { RegistrationPage } from "../registration/registration";
import { HomePage } from "../home/home";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public events : Events, public dataProvider : DataProvider , public app : AppProvider , public navCtrl: NavController, public navParams: NavParams) {
    this.app.start()
    this.events.subscribe("data::loaded",()=>{this.app.checkRegistration().then((value)=>{
      console.log("done")
        if(value == null){
            this.navCtrl.setRoot(RegistrationPage);
        }else{
          this.navCtrl.setRoot(HomePage);
        }

      });
    })
    this.events.subscribe("data::failed",()=>{

    })
  }
  checkNew(){
    this.app.checkNew();
  }

  createNew(){
    this.app.createNew();
  }
}
