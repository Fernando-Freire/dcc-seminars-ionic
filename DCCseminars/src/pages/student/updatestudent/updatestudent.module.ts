import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Updatestudent } from './updatestudent';

@NgModule({
  declarations: [
    Updatestudent,
  ],
  imports: [
    IonicPageModule.forChild(Updatestudent),
  ],
  exports: [
    Updatestudent
  ]
})
export class UpdatestudentModule {}
