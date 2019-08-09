import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInAdminPage } from '../pages/sign-in-admin/sign-in-admin';
import { SignInUserPage } from '../pages/sign-in-user/sign-in-user';
import { UserHomePage } from '../pages/user-home/user-home';
import { AdminHomePage } from '../pages/admin-home/admin-home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInAdminPage,
    SignInUserPage,
    UserHomePage,
    AdminHomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInAdminPage,
    SignInUserPage,
    UserHomePage,
    AdminHomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
