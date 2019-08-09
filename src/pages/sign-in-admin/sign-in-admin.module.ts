import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInAdminPage } from './sign-in-admin';

@NgModule({
  declarations: [
    SignInAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInAdminPage),
  ],
})
export class SignInAdminPageModule {}
