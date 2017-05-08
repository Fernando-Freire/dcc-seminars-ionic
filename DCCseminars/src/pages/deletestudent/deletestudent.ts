import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the Deletestudent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deletestudent',
  templateUrl: 'deletestudent.html',
})
export class Deletestudent {
  private usernusp:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,private http: Http) {
  }


  deletestudent(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toast = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });
    let toast1 = this.toastCtrl.create({
      message: 'Aluno registrado com sucesso',
      duration: 3000,
      position: 'bottom'
    });

    this.http.post(
      "/api/student/delete",
      `nusp=${this.usernusp}`,
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
    console.log('ionViewDidLoad Deletestudent');
  }

}
