import { Component } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabSettings = SettingsPage;

  constructor() { }

}