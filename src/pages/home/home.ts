import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, NavParams} from 'ionic-angular';
import { DataProvider } from '../../providers/central/central';
import { AppProvider } from '../../providers/app/app';
import { ToastController } from 'ionic-angular';

import {OrderReadyPage } from "../order-ready/order-ready";
import { UserProvider } from '../../providers/user/user';
import { FirebasepushProvider } from '../../providers/firebasepush/firebasepush';
import { map, filter, scan, tap, take} from 'rxjs/operators';
import 'rxjs/util/pipe';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import _ from 'lodash';
import * as $ from 'jquery';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gat : any;
  ann = new BehaviorSubject([]);
  batch = 2         // size of each query
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of database is reached


  constructor(public fcm : FirebasepushProvider, public toastCtrl: ToastController, public app : AppProvider, public user : UserProvider,  public parameters: NavParams, public dataProvider : DataProvider, public modalCtrl : ModalController, public navCtrl: NavController) { this.gat = "providers";} //default view for segment

  ionViewDidLoad(){
    this.fcm.getToken();
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
          const toast = this.toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
      })
    ).subscribe()
  }


  ngOnInit() {
   this.getMore(15)
 }


  onScroll () {
    this.getMore(6)
  }
  private getMore(batch : any){
    if(this.finished) return;
    this.app
    .getMore(batch, this.lastKey).map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
        }));
      }).subscribe(ann => {
        console.log(ann)
            this.lastKey = _.last(ann)['key']
            const newAnn = _.slice(ann, 0, batch -1);
            console.log(newAnn)
            const currentAnn = this.ann.getValue();
            if (this.lastKey == _.last(newAnn)['key']) {
                 this.finished = true
               }
            this.ann.next( _.concat(currentAnn, newAnn) )
      });
  }
  showList(){
    $(".home").fadeOut(500)
    $(".list").fadeIn(500)
    this.app.clearNew();
  }
  view(obj : any){
    this.user.addToRead(obj.key);
    this.navCtrl.push(OrderReadyPage,{
      "announcement" : obj
    });
  }
  hideList(){
    $(".list").fadeOut(500)
    $(".home").fadeIn(500)
    this.app.clearNew();

  }
  showInfo() {
    let toast = this.toastCtrl.create({
      message: 'Konza Technology Systems \n Nalane-version 1.1.0',
      showCloseButton : true,
      dismissOnPageChange: true,
      position : "middle",
      cssClass:"toast"
    });
    toast.present();
  }

}
