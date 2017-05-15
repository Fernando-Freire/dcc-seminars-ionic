import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Seminarsprofessor } from '../seminarsprofessor/seminarsprofessor'
/**
 * Generated class for the Addseminar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addseminar',
  templateUrl: 'addseminar.html',
})
export class Addseminar {
  private seminarname:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private toastCtrl: ToastController,private http: Http) {
  }


  registerseminar(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toastsuccess = this.toastCtrl.create({
      message: 'Seminário adicionado com sucesso',
      duration: 5000,
      position: 'bottom'
    });
    let toasterror = this.toastCtrl.create({
      message: 'Erro: não foi possível adicionar o seminário',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "http://207.38.82.139:8001/seminar/add",
      `name=${this.seminarname}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          console.log(response.json())
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
