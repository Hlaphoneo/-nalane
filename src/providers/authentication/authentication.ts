import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Events } from "ionic-angular";
import { Storage } from '@ionic/storage';

import {RestProvider} from "../rest/rest";

// import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationProvider {
  cpRef = 'https://us-central1-washee-6f663.cloudfunctions.net/uscp';

  constructor(public storage : Storage, public rest : RestProvider, public events : Events , public firebaseAuth : AngularFireAuth) {
  }

  checkAuth(){
    return this.storage.get("authenticated").then((val)=>{
      return val;
    })
  }
  revokeAuthentication(){
    this.firebaseAuth.auth.signOut().then(()=>{
        this.storage.remove("authenticated");
        this.events.publish("authenticated",false);
    }).catch((error) => {
        this.events.publish("loginstate","unknown-error");
    });
  }
  authenticate(signData : any){
        this.firebaseAuth.auth.signInWithEmailAndPassword(signData.email,signData.password)
        .then((response:any) => {
            this.storage.set("authenticated",true)
            this.events.publish("authenticated",true) // this is just temparary
        }).catch((error :any) => {
            let message = "";
            if(error.code == "auth/invalid-email")
                message = "Email is not valid."
            if(error.code == "auth/user-not-found")
                message = "Email not registered."
            if(error.code == "auth/user-disabled")
                message = error.message; //I like the original message
            if(error.code == "auth/wrong-password")
                message = "Password incorrect, please try again.";
            if(error.code == "auth/network-request-failed")
                message = "Connection not available"
            if(message != ""){
                this.events.publish("signinevent",message);
                return false;
              }
              console.log(error.code)
            this.events.publish("signinevent",error.message);
      });
  }
  registerNewUser(signupData : any){ //registering new user by email and password
    this.firebaseAuth.auth.createUserWithEmailAndPassword(signupData.email, signupData.password).then((user)=>{
      signupData.uid = user.uid;
      this.createUserReference(signupData);
    }).catch((error:any)=>{
            this.events.publish("signupevent",error.message)
      });
  }
  createUserReference(userData : any){
    this.rest.signupPost(this.cpRef, userData); //uses rest api to login, the sign up authentication is only completed after the user profile is creates
  }
}
