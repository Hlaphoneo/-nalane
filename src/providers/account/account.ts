import { Injectable } from '@angular/core';
import {AuthenticationProvider} from "../authentication/authentication";


@Injectable()
export class AccountProvider {

  constructor(public authenticator : AuthenticationProvider ) {this.checkLogin();}

  signup(signupData : any){
      this.authenticator.registerNewUser(signupData);
  }
  signin(signData){
    this.authenticator.authenticate(signData)
  }
  signout(){
    this.authenticator.revokeAuthentication();
  }
  checkLogin(){
    return this.authenticator.checkAuth();
  }
}
