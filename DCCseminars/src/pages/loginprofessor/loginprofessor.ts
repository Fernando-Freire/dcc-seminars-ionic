import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Optionsprofessor } from '../optionsprofessor/optionsprofessor';
import { Http, RequestOptions, Headers } from '@angular/http';
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

  usernusp;
  userpassword;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private toastCtrl: ToastController
  ) {}

  login() {
    let toast = this.toastCtrl.create({
      message: 'Erro: campos inválidos',
      duration: 3000,
      position: 'bottom'
    });

    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

    this.http.post(
      "/api/login/teacher",
      `nusp=${this.usernusp}&pass=${this.userpassword}`,
      options
    ).subscribe(
      (response) => {
        let wasSuccessful = response.json().success
        if (wasSuccessful){
          this.navCtrl.setRoot(Optionsprofessor);
        }
        else {
          toast.present()
        }
      },
      (error) => {
        toast.present()
      }
    )
  }

  ionViewDidLoad() {
  }
}
