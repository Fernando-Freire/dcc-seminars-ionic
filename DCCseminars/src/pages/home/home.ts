import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController , public storage : Storage,private  http : Http) {
  }

  login(){
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers});

     this.http.post(
       "/api/login/student",
       `nusp=${this.usernusp}&pass=${this.userpassword}`,
       options
     ).subscribe(
         (response) => { let wasSuccessful = response.json().success
           if (wasSuccessful){
             this.navCtrl.push( Seminarsstudent);
           }
          else{

          }




             }
       )
  }

}
