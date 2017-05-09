import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Seminar } from '../../app/seminar';
import { Editseminar } from '../editseminar/editseminar';
import { Addseminar } from '../addseminar/addseminar';


/**
 * Generated class for the Seminarsprofessor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminarsprofessor',
  templateUrl: 'seminarsprofessor.html',
})
export class Seminarsprofessor {
  seminarList: Seminar[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seminarsprofessor');
    this.http.get('/api/seminar').subscribe(
      (response) => { this.seminarList = response.json().data as Seminar[]
      },
      (error) => {
      }
    )
  }


  seminarpageprofessor(){
    this.navCtrl.push(Editseminar);
  }
  addseminar(){
    this.navCtrl.push(Addseminar);
  }
  editseminar(){
    this.navCtrl.push(Editseminar);
  }
}
