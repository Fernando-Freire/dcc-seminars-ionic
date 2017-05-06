import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Optionsprofessor } from '../optionsprofessor/optionsprofessor';
import { Http } from '@angular/http';
/**
 * Generated class for the Loginprofessor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loginprofessor',
  templateUrl: 'loginprofessor.html',
})
export class Loginprofessor {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }


  login(){
    this.http.post("http://207.38.82.139:8001/login/teacher",{headers : new Headers({
      "Content-Type": "application/x-www-form-urlencoded" }) })
      this.navCtrl.push( Optionsprofessor );
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginprofessor');
  }

}
