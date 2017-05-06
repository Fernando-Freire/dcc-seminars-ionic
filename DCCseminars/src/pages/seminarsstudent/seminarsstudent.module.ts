import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seminarsstudent } from './seminarsstudent';

@NgModule({
  declarations: [
    Seminarsstudent,
  ],
  imports: [
    IonicPageModule.forChild(Seminarsstudent),
  ],
  exports: [
    Seminarsstudent
  ]
})
export class SeminarsstudentModule {}
