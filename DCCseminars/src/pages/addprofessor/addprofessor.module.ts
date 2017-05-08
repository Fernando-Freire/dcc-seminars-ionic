import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Addprofessor } from './addprofessor';

@NgModule({
  declarations: [
    Addprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Addprofessor),
  ],
  exports: [
    Addprofessor
  ]
})
export class AddprofessorModule {}
