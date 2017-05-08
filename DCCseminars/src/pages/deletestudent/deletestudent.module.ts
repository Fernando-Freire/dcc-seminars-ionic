import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Deletestudent } from './deletestudent';

@NgModule({
  declarations: [
    Deletestudent,
  ],
  imports: [
    IonicPageModule.forChild(Deletestudent),
  ],
  exports: [
    Deletestudent
  ]
})
export class DeletestudentModule {}
