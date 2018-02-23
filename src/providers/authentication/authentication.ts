import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http , Headers } from '@angular/http';
import { Events } from "ionic-angular";

import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationProvider {
  cpRef = 'https://us-central1-washee-6f663.cloudfunctions.net/uscp';

  constructor(public events : Events ,public http: Http, public firebaseAuth : AngularFireAuth) {
    this.checkAuth()
  }

  checkAuth(){
    this.firebaseAuth.auth.onAuthStateChanged((user) => {
      if(user){
        this.events.publish("loginstate",true)
      }else{
        this.events.publish("loginstate",false)
      }
    });
  }
  logout(){
    firebaseAuth.auth.signOut().then(()=>{
        this.events.publish("loginstate",false);
    }).catch((error) => {
        this.events.publish("loginstate","unknown-error");
    });
  }
  authenticate(signData : any){
        this.firebaseAuth.auth.signInWithEmailAndPassword(signData.email,signData.password)
        .then((response:any) => {
            this.events.publish("signinevent","success") // this is just temparary
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
  registerNewUser(signupData : any){
    this.firebaseAuth.auth.createUserWithEmailAndPassword(signupData.email, signupData.password).then((user)=>{
      signupData.uid = user.uid;
      this.createUserReference(signupData);
    }).catch((error:any)=>{
            this.events.publish("signupevent",error.message)
      });
  }
  createUserReference(userData : any){
    this.http.post(this.cpRef, JSON.stringify(userData))
          .subscribe(res => {
            if(res.status == 200){
              this.events.publish("signupevent","success")
            }
          }, (err) => {
            this.events.publish("signupevent","Signup failed! :(, Please check data")
      });
  }
}
