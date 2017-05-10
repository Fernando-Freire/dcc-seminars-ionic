import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the Editseminar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editseminar',
  templateUrl: 'editseminar.html',
})
export class Editseminar {
  private seminarid:any;
  private seminarname:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,private http: Http) {
  }




  removeseminar(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toast1 = this.toastCtrl.create({
      message: 'Seminario deletado com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toast3 = this.toastCtrl.create({
      message: 'Erro: digite o id a ser deletado',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "/api/seminar/delete",
      `id=${this.seminarid}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          if (wasSuccessful){
            toast1.present();
          }
         else{

           toast3.present();
         }
       }
      )
  }

  updateseminar(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toast1 = this.toastCtrl.create({
      message: 'Seminario alterado com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toast = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "/api/seminar/edit",
      `id=${this.seminarid}&name=${this.seminarname}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          if (wasSuccessful){
            toast1.present();
          }
         else{

           toast.present();
         }
       }
      )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Editseminar');
  }

}
