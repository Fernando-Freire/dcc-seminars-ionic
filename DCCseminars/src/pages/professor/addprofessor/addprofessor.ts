import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the Addprofessor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addprofessor',
  templateUrl: 'addprofessor.html',
})
export class Addprofessor {
  private usernusp:any;
  private userpassword:any ;
  private username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,private http: Http) {
  }


  registerprofessor(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toastsuccess = this.toastCtrl.create({
      message: 'Professor registrado com sucesso',
      duration: 5000,
      position: 'bottom'
    });
    let toasterror = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "http://207.38.82.139:8001/teacher/add",
      `nusp=${this.usernusp}&pass=${this.userpassword}&name=${this.username}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          if (wasSuccessful) {
            toastsuccess.present();
          }
         else{
           toasterror.present();
         }
        }
      )
  }
  ionViewDidLoad() {

  }

}
