import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seminardetail } from './seminardetail';

@NgModule({
  declarations: [
    Seminardetail,
  ],
  imports: [
    IonicPageModule.forChild(Seminardetail),
  ],
  exports: [
    Seminardetail
  ]
})
export class SeminardetailModule {}
