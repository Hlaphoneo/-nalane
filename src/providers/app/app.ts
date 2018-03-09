import { Injectable} from '@angular/core';
import {Events} from "ionic-angular";
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
    }
  /*
    events driven startup interface
      1. load all reports
      3. Check if the user is logged. in
  */
    appInit(){
        this.orders.init(); // loading all orders
        this.checkAuth().then((authentication)=>{ //checking if the user is authenticated
          if(!authentication)
            this.events.publish("authenticated",false); //if the user is logged in
          else
            this.events.publish("authenticated",true);
        });
    }

  /*
    This method destroyes all user data and brings the application to the state before login
  */
    appKill(){}

  /*============================================================================
    Interface :  Account Interface
  */
    checkAuth(){return this.account.checkLogin()}
}
