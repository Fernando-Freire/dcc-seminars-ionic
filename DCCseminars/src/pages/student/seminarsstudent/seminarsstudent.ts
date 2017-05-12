import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Seminar } from '../../../app/seminar';
import { Updatestudent } from '../updatestudent/updatestudent';
import { Choice } from '../../choice/choice';
import { Seminardetail } from '../seminardetail/seminardetail';

@IonicPage()
@Component({
  selector: 'page-seminarsstudent',
  templateUrl: 'seminarsstudent.html',
})
export class Seminarsstudent {
  seminarList: Seminar[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {}

  ionViewDidLoad() {
    this.http.get('http://207.38.82.139:8001/seminar').subscribe(
      (response) => {
        this.seminarList = response.json().data as Seminar[]
      },
      (error) => {
      }
    )
  }

  seminarDetail(seminar) {
    this.navCtrl.push(Seminardetail, {id: seminar.id})
  }

  updatestudent(){
    this.navCtrl.push(Updatestudent);
  }

  logout(){
    this.navCtrl.setRoot(Choice);
  }
}
