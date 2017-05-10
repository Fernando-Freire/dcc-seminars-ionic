import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loginstudent } from '../student/login/login';
import { Register } from '../student/register/register';
import { Loginprofessor } from '../professor/loginprofessor/loginprofessor';

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
