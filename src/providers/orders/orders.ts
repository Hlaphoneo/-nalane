import { Injectable } from '@angular/core';
import {DataProvider} from "../data/data";



@Injectable()
export class OrdersProvider {

  constructor(public data : DataProvider) {}

  /*
    Application init method;

  */

  init(){
    this.loadOrders(5,5)
  }

  /*
    @params - start - starting position start loading orders from
    @params - end - upper bound index start loading orders from

    objective : Load orders using the bounds provided. This orders a part of the global order list
  */

  loadOrders(start : any, end : any){console.log("loading all orders")}

  /*
    @params - reference - database reference key of the user
    Objective - This function loads favourite and active user reports
  */

  loadUserOrders(reference : string){console.log("loading user orders")}
}
