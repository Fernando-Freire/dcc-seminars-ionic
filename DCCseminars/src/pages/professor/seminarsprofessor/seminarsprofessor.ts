import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Seminar } from '../../../app/seminar';
import { Addprofessor } from '../addprofessor/addprofessor';
import { Editprofessor } from '../editprofessor/editprofessor';
import { Choice } from '../../choice/choice';
import { Seminarpageprofessor } from '../seminarpageprofessor/seminarpageprofessor';

@IonicPage()
@Component({
  selector: 'page-seminarsprofessor',
  templateUrl: 'seminarsprofessor.html',
})
export class Seminarsprofessor {
  seminarList: Seminar[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {}

  ionViewDidLoad() {
    this.http.get('/api/seminar').subscribe(
      (response) => {
        this.seminarList = response.json().data as Seminar[]
      },
      (error) => {
      }
    )
  }

  seminarDetail(seminar) {
    this.navCtrl.push(Seminarpageprofessor, {id: seminar.id})
  }

  editProfile() {
    this.navCtrl.push(Editprofessor)
  }

  addProfessor() {
    this.navCtrl.push(Addprofessor);
  }

  logout() {
    this.navCtrl.setRoot(Choice);
  }
}
