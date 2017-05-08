import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seminarsprofessor } from './seminarsprofessor';

@NgModule({
  declarations: [
    Seminarsprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Seminarsprofessor),
  ],
  exports: [
    Seminarsprofessor
  ]
})
export class SeminarsprofessorModule {}
