import { Component } from '@angular/core';
import { HomeComponent } from '../../../movies/components/home/home';
import { SettingsComponent } from '../../../movies/components/settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  tabHome = HomeComponent;
  tabSettings = SettingsComponent;

  constructor() { }

}