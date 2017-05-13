import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Loginprofessor } from './loginprofessor';

@NgModule({
  declarations: [
    Loginprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Loginprofessor),
  ],
  exports: [
    Loginprofessor
  ]
})
export class LoginprofessorModule {}
