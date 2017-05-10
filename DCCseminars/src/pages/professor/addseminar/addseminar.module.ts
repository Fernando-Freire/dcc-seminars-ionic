import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Addseminar } from './addseminar';

@NgModule({
  declarations: [
    Addseminar,
  ],
  imports: [
    IonicPageModule.forChild(Addseminar),
  ],
  exports: [
    Addseminar
  ]
})
export class AddseminarModule {}
