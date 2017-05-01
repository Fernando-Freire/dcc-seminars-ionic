import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private usernusp:any;
  private userpassword:any ;
  private markli: false ;

  constructor(public navCtrl: NavController , public storage : Storage) {
  }
    pushPage(){
  // push another page onto the navigation stack
  // causing the nav controller to transition to the new page
  // optional data can also be passed to the pushed page.
        this.navCtrl.push( Register );
  }





  if(markli){
    this.storage.set('nusp',this.usernusp);
    this.storage.set('pass',this.userpassword);

  }

  Login(){

  }

}
