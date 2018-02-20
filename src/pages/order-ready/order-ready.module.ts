import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderReadyPage } from './order-ready';

@NgModule({
  declarations: [
    OrderReadyPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderReadyPage),
  ],
})
export class OrderReadyPageModule {}
