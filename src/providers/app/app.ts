import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../central/central';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import { Events} from 'ionic-angular';
/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {
  database2 : any;
  constructor(public events : Events, public database : AngularFireDatabase, public storage :  Storage, public dataProvider : DataProvider){
    this.database2 = firebase.database();

  }

  start(){
    this.dataProvider.calculateNew();
  }
  getMore(batch,lastKey : any){
    return this.dataProvider.loadAnnouncements(batch, lastKey);
  }

  checkRegistration(){
    return this.storage.get('registration').then((mode) =>{
        return mode;
    })
  }
  checkNew(){
    this.dataProvider.checkNew();
  }
  register(phone : string){
    this.database2.ref("/reg-information").push({phone}).then(()=>{
        this.events.publish("registration::true")
        this.storage.set("registration",true)
    })
  }
  clearNew(){
    this.dataProvider.clearNew();
  }
  updateViewMore(){
    this.dataProvider.updateViewMore();
  }

  createNew(){

  }

}
