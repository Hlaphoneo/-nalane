import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Storage } from '@ionic/storage';



// import * as firebase from 'firebase/app';

@Injectable()



export class DataProvider {
  dataLoader          = {
    "ann"   : false,
    "news"  : false
  };

  batch =  15;
  view = Array(); //array used to view and output the data
  start = 0;
  end   = 2;


  newAnnouncements = 0;
  snapShot = Array();
  lastIndexKey : any;
  test  = Array();
  announcements       : FirebaseListObservable<any>;
  news                : FirebaseListObservable<any>;
  obeservableList     : any;
  obeservableListNew : any;
  read = Array();
  new  = Array();

  constructor(public storage : Storage , public events : Events, public database : AngularFireDatabase) {
    this.obeservableListNew = this.database.list("Announcements-nalane2018")
    this.wait();
  }



  loadAnnouncements(batch = 3 , lastKey : any){
    console.log("entry")
    if(lastKey){
      console.log("loading with key")
      return this.database.list("Announcements-nalane2018", ref => ref.startAt(lastKey).orderByKey().limitToFirst(batch+1)).snapshotChanges();
    }
    else{
      console.log("loading without key")
      return this.obeservableList = this.database.list("Announcements-nalane2018", ref => ref.orderByKey().limitToFirst(batch+1)).snapshotChanges();
    }
  }


  calculateNew(){
        this.obeservableListNew = this.database.list("Announcements-nalane2018", ref => ref.orderByKey().limitToLast(15));

      this.announcements = this.obeservableListNew.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
          }));
      });
      this.announcements.subscribe(post => {
        this.test = Array();
        post.map(y => {
          this.test.push(y)
        });
        this.test = this.test.reverse()
        this.checkNew();
        this.dataLoader.ann = true;
      });
  }

  updateViewMore(){ //number of posts to view;
    this.end = this.end+1;
    this.k(this.end)
    for (let i = 0; i < this.end ; i++) {
        if(this.test[i]){
          this.view[i] = this.test[i];
        }
      }
  }
  k(x : any){
    this.obeservableList = this.database.list("Announcements-nalane2018", ref => ref.limitToFirst(x));
    this.announcements.subscribe(post => {
      this.test = Array();
      post.map(y => {
        this.test.push(y)
      });
      this.test = this.test.reverse()
      this.checkNew();
      this.dataLoader.ann = true;
    });

  }
  loadNews(){
    // this.news = this.obeservableListNews.snapshotChanges().map(changes => {
    //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
    //     }));
    // });
    // this.news.subscribe(x => {
    //   this.dataLoader.news = true;
    // });
  }
  checkNew(){
    this.storage.get("LIK").then((key)=>{
        if(key == null){
          this.updateKey();
        }else{
          this.lastIndexKey = key;
          if(this.lastIndexKey == null){
            this.updateKey();
          }
          else{
              let index = this.checkIndex(key,this.test)
              if(index < 0 && this.test.length == 0){
                this.newAnnouncements = 0;
                return;
              }
              if(index < 0){
                this.newAnnouncements = 10;
              }else{
                this.newAnnouncements = index;
              }
          }
        }
    })

  }

  clearNew(){
    this.newAnnouncements = 0;
    this.lastIndexKey = this.test[0].key;
    this.storage.set("LIK",this.lastIndexKey);
  }
  checkIndex(elem : string , test : any){
      for (let i = 0; i < test.length; i++) {
          if(test[i].key == elem){
            return i;
          }
      }
      return -1;
  }
  updateKey(){
    this.lastIndexKey = this.test[0].key;
    this.storage.set("LIK",this.lastIndexKey);
  }
  wait(){
    let loadTO = setTimeout(() =>{
        clearInterval(int);
        this.events.publish("data::failed");
    }, 60000);
    let int = setInterval(()=>{
        if(this.dataLoader.ann == true){
          this.events.publish("data::loaded");
          clearInterval(int);
          clearTimeout(loadTO);
        }
    }, 2000);


  }
  tests(){

  }
}
