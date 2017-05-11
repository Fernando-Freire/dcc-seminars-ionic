import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the Seminarpageprofessor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seminarpageprofessor',
  templateUrl: 'seminarpageprofessor.html',
})
export class Seminarpageprofessor {
  private seminarname: any
  private seminarid:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Seminarpageprofessor');
    this.http.get('/api/seminar/get/${seminarid}').subscribe(
      (response) => { this.seminarname = response.json().name;
        this.seminarid = response.json().id;


      },
      (error) => {
      }
    )
  }

}
