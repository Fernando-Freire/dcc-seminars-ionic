import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Seminar } from '../../../app/seminar';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-seminardetail',
  templateUrl: 'seminardetail.html',
})
export class Seminardetail {

  loading: boolean = true;
  id: string;
  seminar: Seminar;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {
    this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    this.http.get('/api/seminar/get/' + this.id).subscribe(
      (response) => {
        this.seminar = response.json().data as Seminar
        this.loading = false;
      },
      (error) => {
      }
    )
  }
}
