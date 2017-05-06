import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Optionsstudent } from './optionsstudent';

@NgModule({
  declarations: [
    Optionsstudent,
  ],
  imports: [
    IonicPageModule.forChild(Optionsstudent),
  ],
  exports: [
    Optionsstudent
  ]
})
export class OptionsstudentModule {}
