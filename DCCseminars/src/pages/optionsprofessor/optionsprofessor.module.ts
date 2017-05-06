import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Optionsprofessor } from './optionsprofessor';

@NgModule({
  declarations: [
    Optionsprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Optionsprofessor),
  ],
  exports: [
    Optionsprofessor
  ]
})
export class OptionsprofessorModule {}
