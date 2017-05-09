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
    let toast1 = this.toastCtrl.create({
      message: 'Professor registrado com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toast = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "/api/teacher/add",
      `nusp=${this.usernusp}&pass=${this.userpassword}&name=${this.username}`,
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
    console.log('ionViewDidLoad Addprofessor');
  }

}