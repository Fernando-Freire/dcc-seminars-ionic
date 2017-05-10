import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
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
    let toast1 = this.toastCtrl.create({
      message: 'Seminario adicionado com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toast = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "/api/seminar/add",
      `name=${this.seminarname}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          console.log(response.json())
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
    console.log('ionViewDidLoad Addseminar');
  }

}
