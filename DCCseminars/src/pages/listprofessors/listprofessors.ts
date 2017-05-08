import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Professor } from '../../app/professor';
import { Addprofessor } from '../addprofessor/addprofessor';
import { Editprofessor } from '../editprofessor/editprofessor';
/**
 * Generated class for the Listprofessors page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listprofessors',
  templateUrl: 'listprofessors.html',
})
export class Listprofessors {
  professorList: Professor[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Listprofessors');
    this.http.get('/api/teacher').subscribe(
      (response) => { this.professorList = response.json().data as Professor[]
      },
      (error) => {
      }
    )
  }


  addprofessor(){
    this.navCtrl.push(Addprofessor);
  }

  changeprofessor(){
    this.navCtrl.push(Editprofessor);
  }

}
