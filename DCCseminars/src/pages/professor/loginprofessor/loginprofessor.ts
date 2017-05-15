import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Seminarsprofessor } from '../seminarsprofessor/seminarsprofessor';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
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
    private toastCtrl: ToastController,
    private storage: NativeStorage
  ) {}

  login() {
    let toast = this.toastCtrl.create({
      message: 'Não foi possível fazer o login',
      duration: 3000,
      position: 'bottom'
    });

    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

    this.http.post(
      "http://207.38.82.139:8001/login/teacher",
      `nusp=${this.usernusp}&pass=${this.userpassword}`,
      options
    ).subscribe(
      (response) => {
        let wasSuccessful = response.json().success
        console.log(wasSuccessful);
        if (wasSuccessful){
          this.storage.setItem('usernusp',this.usernusp);
          this.storage.setItem('userpass',this.userpassword);
          this.navCtrl.setRoot(Seminarsprofessor);
        }
        else {
          toast.present()
        }
      },
      (error) => {
        console.log(error);
        console.log(error.message);
        toast.present()
      }
    )
  }

  ionViewDidLoad() {
    // this.storage.getItem('studentnusp').then(
    //   () => this.usernusp
    // );
    // this.storage.getItem('studentpass').then(
    //   () => this.userpassword
    // );
  }
}
