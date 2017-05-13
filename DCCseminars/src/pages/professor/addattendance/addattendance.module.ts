import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Addattendance } from './addattendance';

@NgModule({
  declarations: [
    Addattendance,
  ],
  imports: [
    IonicPageModule.forChild(Addattendance),
  ],
  exports: [
    Addattendance
  ]
})
export class AddattendanceModule {}
