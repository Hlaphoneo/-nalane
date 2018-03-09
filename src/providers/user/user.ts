import { Injectable } from '@angular/core';
import {OrdersProvider} from "../orders/orders";
import {GpsProvider} from "../gps/gps";

import {Events} from "ionic-angular";


@Injectable()
export class UserProvider {

  constructor(public events : Events, public gps : GpsProvider, public orders : OrdersProvider) {
    this.events.subscribe("authenticated",(authentication)=>{
      if(authentication == true)
          this.init();
    })
   }

  /*
    Application init method;
      1.  Load all active user active orders
      2.  Load user favourite orders
  */

  init(){
    this.loadUserProfile();
    this.startLocationStream();
    this.orders.loadUserOrders("dummy");
  }

  /*
    Called after login event;
      1. Collects user profile from the database
  */

  loadUserProfile(){}
  startLocationStream(){this.gps.startGPSsystem();}
}
