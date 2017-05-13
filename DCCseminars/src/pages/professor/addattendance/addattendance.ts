import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-addattendance',
  templateUrl: 'addattendance.html',
})
export class Addattendance {

  loading: boolean = false;

  seminarId: string;
  nusp: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private http: Http
  ) {
    this.seminarId = navParams.get("id");
  }

  ionViewDidLoad() {
  }

  submit() {
    this.loading = true;

    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toastsuccess = this.toastCtrl.create({
      message: 'Presença adicionada',
      duration: 5000,
      position: 'bottom'
    });

    this.http.post(
      "http://207.38.82.139:8001/attendence/submit",
      `nusp=${this.nusp}&seminar_id=${this.seminarId}`,
      options
    ).subscribe(
      (response) => {
        let wasSuccessful: boolean = response.json().success;
        if (wasSuccessful) {
          this.navCtrl.pop(toastsuccess.present());
        } else {
          this.notifyError();
        }
        this.loading = false;
      },
      (error) => {
        this.notifyError();
        this.loading = false;
      }
    )
  }

  notifyError() {
    let toasterror = this.toastCtrl.create({
      message: 'Erro adicionando presença',
      duration: 3000,
      position: 'bottom'
    });

    toasterror.present();
  }
}
