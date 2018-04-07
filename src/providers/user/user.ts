import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  read = Array();
  new = Array();
  constructor(public storage : Storage){
    this.init();
  }

  init(){
    this.retrive();
  }
  /*  Save the currenct object in the storage*/

  retrive(){
    this.storage.get("read").then((value)=>{
      if(value != null){
        this.read = value;
      }
    })
    this.storage.get("new").then((value)=>{
        this.new = value;
    })
    console.log(this.read)
  }
  addToRead(key : string){
    if(this.read.indexOf(key) < 0 ){
      this.read.push(key)
    }
    this.storage.set("read",this.read);

    console.log(this.read)
  }
  addToNew(key : string){
    if(this.new != null)
      this.new.push(key)
    else
      this.new = Array();
      this.new.push(key);
  }
}
