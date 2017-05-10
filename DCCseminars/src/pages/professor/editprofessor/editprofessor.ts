import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the Editprofessor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editprofessor',
  templateUrl: 'editprofessor.html',
})
export class Editprofessor {
  private usernusp:any;
  private userpassword:any ;
  private username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,private http: Http) {
  }


  removeprofessor(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toast1 = this.toastCtrl.create({
      message: 'Professor deletado com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toast3 = this.toastCtrl.create({
      message: 'Erro: digite o nusp a ser deletado',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "/api/teacher/delete",
      `nusp=${this.usernusp}`,
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
  updateprofessor(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});
    let toast1 = this.toastCtrl.create({
      message: 'Professor alterado com sucesso',
      duration: 3000,
      position: 'bottom'
    });
    let toast = this.toastCtrl.create({
      message: 'Erro: campos invalidos',
      duration: 3000,
      position: 'bottom'
    });
    this.http.post(
      "/api/teacher/edit",
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
