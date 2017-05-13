import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Seminar } from '../../../app/seminar';
import { Addattendance } from '../addattendance/addattendance';

@IonicPage()
@Component({
  selector: 'page-seminarpageprofessor',
  templateUrl: 'seminarpageprofessor.html',
})
export class Seminarpageprofessor {
  loadingSeminar: boolean = true;
  loadingAttendance: boolean = true;

  private id: string;
  private seminar: Seminar;
  private attendances: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {
    this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

    this.http.get('http://207.38.82.139:8001/seminar/get/' + this.id).subscribe(
      (response) => {
        this.seminar = response.json().data;
        this.loadingSeminar = false;
      },
      (error) => {
      }
    )
    this.http.post(
      "http://207.38.82.139:8001/attendence/listStudents",
      `seminar_id=${this.id}`,
      options
    ).subscribe(
      (response) => {
        this.attendances = response.json().data;
        console.log(this.attendances);
        this.loadingAttendance = false;
      },
      (error) => {
      }
    )
  }

  addAttendance() {
    this.navCtrl.push(Addattendance, {id: this.id})
  }
}
