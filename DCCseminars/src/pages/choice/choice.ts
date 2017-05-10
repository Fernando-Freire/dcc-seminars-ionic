import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loginstudent } from '../student/login/login';
import { Register } from '../register/register';
import { Loginprofessor } from '../loginprofessor/loginprofessor';

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class Choice {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  homestudent() {
    this.navCtrl.push(Loginstudent);
  }

  homeprofessor() {
    this.navCtrl.push(Loginprofessor);
  }

  registerstudent() {
    this.navCtrl.push(Register);
  }
}
