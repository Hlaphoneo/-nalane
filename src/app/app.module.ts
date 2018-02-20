import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { NewOrderPage } from '../pages/new-order/new-order';
import { LoginPage } from '../pages/login/login';
import { OrderReadyPage } from '../pages/order-ready/order-ready';
import { PasswordResetPage } from '../pages/password-reset/password-reset';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    OrderReadyPage,
    NewOrderPage,
    LoginPage,
    PasswordResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    OrderReadyPage,
    NewOrderPage,
    LoginPage,
    PasswordResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
