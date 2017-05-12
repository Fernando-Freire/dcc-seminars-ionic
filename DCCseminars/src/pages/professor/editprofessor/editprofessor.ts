import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-editprofessor',
  templateUrl: 'editprofessor.html',
})
export class Editprofessor {
  private usernusp:string;
  private userpassword:string;
  private username:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private http: Http
  ) {}

  updateprofessor() {
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

    let toast1 = this.toastCtrl.create({
      message: 'Professor alterado com sucesso',
      duration: 3000,
      position: 'bottom'
    });

    let toast = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });

    this.http.post(
      "http://207.38.82.139:8001/teacher/edit",
      `nusp=${this.usernusp}&pass=${this.userpassword}&name=${this.username}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          if (wasSuccessful) {
            toast1.present();
          }
          else {
            toast.present();
          }
        }
      )
  }

  ionViewDidLoad() {
  }
}
