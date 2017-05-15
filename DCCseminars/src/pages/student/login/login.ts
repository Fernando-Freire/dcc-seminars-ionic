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
        if (wasSuccessful){
          this.storage.setItem('usernusp',this.usernusp);
          this.storage.setItem('userpass',this.userpassword);
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
      message: 'Não foi possível fazer o login',
      duration: 3000,
      position: 'bottom'
    });

    toast.present()
  }
  ionViewDidLoad(){
    // this.storage.getItem('usernusp').then(
    //   () => this.usernusp
    // );
    // this.storage.getItem('userpass').then(
    //   () => this.userpassword
    // );
  }
}
