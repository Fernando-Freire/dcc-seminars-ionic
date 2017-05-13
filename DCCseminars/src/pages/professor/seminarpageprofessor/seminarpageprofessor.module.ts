import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seminarpageprofessor } from './seminarpageprofessor';

@NgModule({
  declarations: [
    Seminarpageprofessor,
  ],
  imports: [
    IonicPageModule.forChild(Seminarpageprofessor),
  ],
  exports: [
    Seminarpageprofessor
  ]
})
export class SeminarpageprofessorModule {}
