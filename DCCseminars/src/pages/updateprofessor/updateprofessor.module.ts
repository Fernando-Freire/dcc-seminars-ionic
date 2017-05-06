import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Updateprofessor } from './updateprofessor';

@NgModule({
  declarations: [
    Updateprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Updateprofessor),
  ],
  exports: [
    Updateprofessor
  ]
})
export class UpdateprofessorModule {}
