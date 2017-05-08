import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listprofessors } from './listprofessors';

@NgModule({
  declarations: [
    Listprofessors,
  ],
  imports: [
    IonicPageModule.forChild(Listprofessors),
  ],
  exports: [
    Listprofessors
  ]
})
export class ListprofessorsModule {}
