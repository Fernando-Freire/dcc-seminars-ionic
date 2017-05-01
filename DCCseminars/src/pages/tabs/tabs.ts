import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { Register } from '../register/register';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Register;
  tab3Root = AboutPage;

  constructor() {

  }
}
