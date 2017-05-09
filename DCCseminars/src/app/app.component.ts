import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from '../providers/auth';
import { Storage } from '@ionic/storage';
import { Choice } from '../pages/choice/choice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Choice;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, auth: Auth, storage : Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    storage.ready().then(() => {

       // set a key/value
       storage.set('name', 'Max');

       // Or to get a key/value pair


     });
  }
}
