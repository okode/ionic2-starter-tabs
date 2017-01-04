import { Component } from '@angular/core';

import { HomePage } from '../../../home/pages/home/home';
import { SettingsPage } from '../../../settings/pages/settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabSettings = SettingsPage;

  constructor() { }

}