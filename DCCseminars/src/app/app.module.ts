import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { Register } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    Register,
    HomePage,
    TabsPage,
    Choice,
    Loginprofessor,
    Updateprofessor,
    Updatestudent,
    Optionsprofessor,
    Optionsstudent,
    Seminarsstudent
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
    AboutPage,
    Register,
    HomePage,
    TabsPage,
    Choice,
    Loginprofessor,
    Updatestudent,
    Updateprofessor,
    Optionsprofessor,
    Optionsstudent,
    Seminarsstudent
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
