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
import { Seminarsstudent } from '../pages/student/seminarsstudent/seminarsstudent';
import { Seminarsprofessor } from '../pages/professor/seminarsprofessor/seminarsprofessor';
import { Seminarpageprofessor } from '../pages/professor/seminarpageprofessor/seminarpageprofessor';
import { Addprofessor } from '../pages/professor/addprofessor/addprofessor';
import { Editprofessor } from '../pages/professor/editprofessor/editprofessor';
import { Editseminar } from '../pages/professor/editseminar/editseminar';
import { Addseminar } from '../pages/professor/addseminar/addseminar';
import { Seminardetail } from '../pages/student/seminardetail/seminardetail';
import { Addattendance } from '../pages/professor/addattendance/addattendance';
import { NativeStorage } from '@ionic-native/native-storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    Register,
    Loginstudent,
    Choice,
    Loginprofessor,
    Updateprofessor,
    Updatestudent,
    Seminarsstudent,
    Seminarsprofessor,
    Seminarpageprofessor,
    Addprofessor,
    Editprofessor,
    Addseminar,
    Editseminar,
    Seminardetail,
    Addattendance
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
    Seminarsstudent,
    Seminarsprofessor,
    Seminarpageprofessor,
    Addprofessor,
    Editprofessor,
    Addseminar,
    Editseminar,
    Seminardetail,
    Addattendance
  ],

  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		Auth
  ]
})

export class AppModule {}
