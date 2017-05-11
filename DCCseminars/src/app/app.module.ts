import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Register } from '../pages/student/register/register';
import { Loginstudent } from '../pages/student/login/login';
import { Choice } from '../pages/choice/choice';
import { Auth } from '../providers/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Loginprofessor } from '../pages/professor/loginprofessor/loginprofessor';
import { Updateprofessor } from '../pages/professor/updateprofessor/updateprofessor';
import { Updatestudent } from '../pages/student/updatestudent/updatestudent';
import { Optionsprofessor } from '../pages/professor/optionsprofessor/optionsprofessor';
import { Seminarsstudent } from '../pages/student/seminarsstudent/seminarsstudent';
import { Seminarsprofessor } from '../pages/professor/seminarsprofessor/seminarsprofessor';
import { Addprofessor } from '../pages/professor/addprofessor/addprofessor';
import { Editprofessor } from '../pages/professor/editprofessor/editprofessor';
import { Editseminar } from '../pages/professor/editseminar/editseminar';
import { Addseminar } from '../pages/professor/addseminar/addseminar';
import { Seminardetail } from '../pages/student/seminardetail/seminardetail';

@NgModule({
  declarations: [
    MyApp,
    Register,
    Loginstudent,
    Choice,
    Loginprofessor,
    Updateprofessor,
    Updatestudent,
    Optionsprofessor,
    Seminarsstudent,
    Seminarsprofessor,
    Addprofessor,
    Editprofessor,
    Addseminar,
    Editseminar,
    Seminardetail
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
    Loginstudent,
    Choice,
    Loginprofessor,
    Updatestudent,
    Updateprofessor,
    Optionsprofessor,
    Seminarsstudent,
    Seminarsprofessor,
    Addprofessor,
    Editprofessor,
    Addseminar,
    Editseminar,
    Seminardetail
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
