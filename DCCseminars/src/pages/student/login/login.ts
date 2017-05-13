import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Seminarsstudent } from '../seminarsstudent/seminarsstudent';

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
    public storage: NativeStorage,
    private http: Http,
    private toastCtrl: ToastController
  ) {
    this.loginHeaders = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    this.loginOptions = new RequestOptions({headers: this.loginHeaders});
  }

  login() {
    this.http.post(
      "http://207.38.82.139:8001/login/student",
      `nusp=${this.usernusp}&pass=${this.userpassword}`,
      this.loginOptions
    ).subscribe(
      (response) => { let wasSuccessful = response.json().success
        console.log(response);
        if (wasSuccessful){
          this.storage.setItem('studentnusp',this.usernusp);
          this.storage.setItem('studentpass',this.userpassword);
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
    console.log("Notifying login failure student...");

    let toast = this.toastCtrl.create({
      message: 'Erro: campos inválidos',
      duration: 3000,
      position: 'bottom'
    });

    toast.present()
  }
  ionViewDidLoad(){
    this.storage.getItem('studentnusp').then(
      () => this.usernusp
    );
    this.storage.getItem('studentpass').then(
      () => this.userpassword
    );

  }
}
