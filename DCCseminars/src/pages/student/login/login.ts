import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Seminarsstudent } from '../../seminarsstudent/seminarsstudent';

@Component({
  selector: 'page-login-student',
  templateUrl: 'login.html'
})
export class Loginstudent {
  private usernusp: string;
  private userpassword: string;

  private loginHeaders;
  private loginOptions;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private http: Http,
    private toastCtrl: ToastController
  ) {
    this.loginHeaders = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    this.loginOptions = new RequestOptions({headers: this.loginHeaders});
  }

  login() {
    this.http.post(
      "/api/login/student",
      `nusp=${this.usernusp}&pass=${this.userpassword}`,
      this.loginOptions
    ).subscribe(
      (response) => { let wasSuccessful = response.json().success
        if (wasSuccessful){
          this.navCtrl.setRoot(Seminarsstudent);
        }
        else {
          this.notifyLoginFailure();
        }
      },
      (error) => this.notifyLoginFailure
    )
  }

  notifyLoginFailure() {
    let toast = this.toastCtrl.create({
      message: 'Erro: campos inválidos',
      duration: 3000,
      position: 'bottom'
    });

    toast.present()
  }
}
