import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the Updatestudent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-updatestudent',
  templateUrl: 'updatestudent.html',
})
export class Updatestudent {
  private usernusp:any;
  private userpassword:any ;
  private username:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private toastCtrl: ToastController,
       private http: Http,
      private storage:NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Updatestudent');
  }
  update(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    this.storage.getItem('usernusp').then(
       () => this.usernusp
     );
    let toasterror = this.toastCtrl.create({
      message: 'Erro: não foi possível alterar seu Cadastro',
      duration: 3000,
      position: 'bottom'
    });
    let toastsuccess = this.toastCtrl.create({
      message: 'Cadastro foi Alterado com Sucesso',
      duration: 5000,
      position: 'bottom'
    });

    this.http.post(
      "http://207.38.82.139:8001/student/edit",
      `nusp=${this.usernusp}&pass=${this.userpassword}&name=${this.username}`,
      options
      ).subscribe(
        (response) => { let wasSuccessful = response.json().success
          if (wasSuccessful) {
             this.navCtrl.pop(toastsuccess.present());
          }
          else{
            toasterror.present();
          }
        }
      )
  }
}
