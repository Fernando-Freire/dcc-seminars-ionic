import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

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
    // private storage: NativeStorage
  ) {}

  updateprofessor() {
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    // this.storage.getItem('professornusp').then(
    //   () => this.usernusp
    // );
    let toastsuccess = this.toastCtrl.create({
      message: 'Cadastro alterado com sucesso',
      duration: 5000,
      position: 'bottom'
    });

    let toasterror = this.toastCtrl.create({
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
            this.navCtrl.pop(toastsuccess.present());
          }
          else {
            toasterror.present();
          }
        }
      )
  }

  ionViewDidLoad() {
  }
}
