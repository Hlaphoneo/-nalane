import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Events } from "ionic-angular";
import { Storage } from '@ionic/storage';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

constructor(public storage : Storage, public events : Events, public http: Http){}

/* posts data to the firebase backend */
signupPost(url : string, userData){
    this.http.post(url, JSON.stringify(userData))
          .subscribe(res => {
            if(res.status == 200){
                this.storage.set("authenticated",true);
                this.events.publish("authenticated",true)
            }
          }, (err) => {
      });
  }
post(data : any){
  //   this.http.post(this.cpRef,s JSON.stringify(results))
  //         .subscribe(res => {
  //           if(res.status == 200){
  //             this.events.publish(results.context,results.data)
  //           }
  //         }, (err) => {
  //           this.events.publish(results.context,"http-error")
  //     });
  }
}
