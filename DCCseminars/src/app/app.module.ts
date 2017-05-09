import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Register } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { Choice } from '../pages/choice/choice';
import { Auth } from '../providers/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Loginprofessor } from '../pages/loginprofessor/loginprofessor';
import { Updateprofessor } from '../pages/updateprofessor/updateprofessor';
import { Updatestudent } from '../pages/updatestudent/updatestudent';
import { Optionsprofessor } from '../pages/optionsprofessor/optionsprofessor';
import { Optionsstudent } from '../pages/optionsstudent/optionsstudent';
import { Seminarsstudent } from '../pages/seminarsstudent/seminarsstudent';
import { Seminarsprofessor } from '../pages/seminarsprofessor/seminarsprofessor';
import { Listprofessors } from '../pages/listprofessors/listprofessors';
import { Deletestudent } from '../pages/deletestudent/deletestudent';
import { Addprofessor } from '../pages/addprofessor/addprofessor';
import { Editprofessor } from '../pages/editprofessor/editprofessor';
import { Editseminar } from '../pages/editseminar/editseminar';
import { Addseminar } from '../pages/addseminar/addseminar';

@NgModule({
  declarations: [
    MyApp,
    Register,
    HomePage,
    Choice,
    Loginprofessor,
    Updateprofessor,
    Updatestudent,
    Optionsprofessor,
    Optionsstudent,
    Seminarsstudent,
    Seminarsprofessor,
    Listprofessors,
    Deletestudent,
    Addprofessor,
    Editprofessor,
    Addseminar,
    Editseminar
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Register,
    HomePage,
    Choice,
    Loginprofessor,
    Updatestudent,
    Updateprofessor,
    Optionsprofessor,
    Optionsstudent,
    Seminarsstudent,
    Seminarsprofessor,
    Listprofessors,
    Deletestudent,
    Addprofessor,
    Editprofessor,
    Addseminar,
    Editseminar
  ],

  providers: [
    Storage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		Auth
  ]
})

export class AppModule {}
