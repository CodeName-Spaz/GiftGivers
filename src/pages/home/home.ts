import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInUserPage } from '../sign-in-user/sign-in-user';
import { SignInAdminPage } from '../sign-in-admin/sign-in-admin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toDonor(){
    this.navCtrl.push(SignInUserPage)
  }
  toAdmin(){
    this.navCtrl.push(SignInAdminPage)
  }

}
