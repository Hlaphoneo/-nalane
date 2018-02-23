import { Injectable} from '@angular/core';
import {Events,App } from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {AccountProvider} from "../account/account";
import {OrdersProvider} from "../orders/orders";
import {UserProvider} from "../user/user";
import {GpsProvider} from "../gps/gps";


/*
  Global interface for all servicess
*/


@Injectable()
export class AppProvider {
  constructor(public events : Events, public gps : GpsProvider, public user : UserProvider, public orders : OrdersProvider, public account : AccountProvider ){}

    appStart(){
      this.appInit()
      this.events.subscribe("loginstate",(loginState)=>{
        if(loginState == true){
          this.user.init();
          console.log("userin")
          this.events.unsubscribe("loginstate");
        }
      })
    }

  /*
    events driven startup interface
      1. load all reports
      3. Start Gps system
  */
    appInit(){
        this.orders.init();
    }

  /*============================================================================
    Interface :  Account Interface
  */
    checkLogin(){ return this.account.checkLogin()}

}
