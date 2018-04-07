
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore} from 'angularfire2/firestore';
import { Platform } from "ionic-angular";




/*
  Generated class for the FirebasepushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebasepushProvider {

  constructor(public Platform : Platform, public database : AngularFirestore, public firebaseNative : Firebase ) {

  }

  async getToken(){
    let token = null;
    token = await this.firebaseNative.getToken()
      this.firebaseNative.getToken().then((token)=>{
          console.log(token)
      }).catch((error)=>{
        console.log(error)
      })
    alert(token)
    return this.saveTokenToFirestore(token);
  }

  saveTokenToFirestore(token : string){
    if(!token) return;
    const deviceRef = this.database.collection('devices');

    const docData = {
      token,
      userId: 'aU9qMi5J9WokJXWX1sdU'
    }

    return deviceRef.doc(token).set(docData)
  }

  listenToNotifications(){
    console.log("listening")
    return this.firebaseNative.onNotificationOpen();
  }

}
