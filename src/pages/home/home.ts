import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gat : any;
  constructor(public navCtrl: NavController) { this.gat = "providers";} //default view for segment

}
