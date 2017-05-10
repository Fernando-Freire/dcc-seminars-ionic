import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Seminarsprofessor } from '../seminarsprofessor/seminarsprofessor';
import { Choice } from '../choice/choice';
import { Listprofessors } from '../listprofessors/listprofessors';
import { Deletestudent } from '../deletestudent/deletestudent';
/**
 * Generated class for the Optionsprofessor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-optionsprofessor',
  templateUrl: 'optionsprofessor.html',
})
export class Optionsprofessor {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  deletestudent(){
    this.navCtrl.push(Deletestudent)
  }
  logout(){
    this.navCtrl.push(Choice);
  }
  seminars(){
    this.navCtrl.push(Seminarsprofessor);
  }
  professors(){
    this.navCtrl.push(Listprofessors);
  }

  ionViewDidLoad(){
  }
}
