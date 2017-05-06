import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Register } from '../register/register';
import { Loginprofessor } from '../loginprofessor/loginprofessor';

/**
 * Generated class for the Choice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class Choice {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  homestudent(){
// push another page onto the navigation stack
// causing the nav controller to transition to the new page
// optional data can also be passed to the pushed page.
      this.navCtrl.push( HomePage );
}

registerstudent(){
// push another page onto the navigation stack
// causing the nav controller to transition to the new page
// optional data can also be passed to the pushed page.
    this.navCtrl.push( Register );
}

homeprofessor(){
// push another page onto the navigation stack
// causing the nav controller to transition to the new page
// optional data can also be passed to the pushed page.
    this.navCtrl.push( Loginprofessor );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Choice');
  }

}
