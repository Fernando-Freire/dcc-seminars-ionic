import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Editseminar } from './editseminar';

@NgModule({
  declarations: [
    Editseminar,
  ],
  imports: [
    IonicPageModule.forChild(Editseminar),
  ],
  exports: [
    Editseminar
  ]
})
export class EditseminarModule {}
