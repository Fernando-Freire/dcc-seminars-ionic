import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Seminarsstudent } from '../seminarsstudent/seminarsstudent';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private usernusp:any;
  private userpassword:any ;

  constructor(public navCtrl: NavController , public storage : Storage,private  http : Http, private toastCtrl : ToastController) {
  }

  login(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

    let toast = this.toastCtrl.create({
      message: 'Erro: campos inválidos',
      duration: 3000,
      position: 'bottom'
    });

    this.http.post(
      "/api/login/student",
      `nusp=${this.usernusp}&pass=${this.userpassword}`,
      options
    ).subscribe(
      (response) => { let wasSuccessful = response.json().success
        if (wasSuccessful){
          this.navCtrl.setRoot(Seminarsstudent);
        }
        else {
          toast.present()
        }
      }
    )
  }
}
