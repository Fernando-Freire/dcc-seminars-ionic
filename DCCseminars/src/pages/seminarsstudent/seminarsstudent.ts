import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Seminar } from '../../app/seminar';
import { Updatestudent } from '../updatestudent/updatestudent';
import { Choice } from '../choice/choice';

/**
 * Generated class for the Seminarsstudent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminarsstudent',
  templateUrl: 'seminarsstudent.html',
})
export class Seminarsstudent {
  seminarList: Seminar[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seminarsstudent');
    this.http.get('/api/seminar').subscribe(
      (response) => { this.seminarList = response.json().data as Seminar[]
      },
      (error) => {
      }
    )
  }

  updatestudent(){
    this.navCtrl.push(Updatestudent);
  }
  logout(){
    this.navCtrl.push(Choice);
  }
}
