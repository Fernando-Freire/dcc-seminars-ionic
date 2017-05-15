import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  private usernusp:any;
  private userpassword:any ;
  private username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
     private toastCtrl: ToastController,private http: Http) {
  }

  registerstudent(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toastsuccess = this.toastCtrl.create({
      message: 'Cadastro Feito com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toasterror = this.toastCtrl.create({
      message: 'Erro: não foi possível efetuar o Cadastro',
      duration: 3000,
      position: 'bottom'
    });

    this.http.post(
      "http://207.38.82.139:8001/student/add",
      `nusp=${this.usernusp}&pass=${this.userpassword}&name=${this.username}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          if (wasSuccessful) {
            toastsuccess.present();
          }
          else {
           toasterror.present();
          }
        }
      )
  }

}
