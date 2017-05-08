import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Editprofessor } from './editprofessor';

@NgModule({
  declarations: [
    Editprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Editprofessor),
  ],
  exports: [
    Editprofessor
  ]
})
export class EditprofessorModule {}
