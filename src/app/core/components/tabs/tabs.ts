import { Component } from '@angular/core';
import { HomeComponent } from '../home/home';
import { SettingsComponent } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  tabHome = HomeComponent;
  tabSettings = SettingsComponent;

  constructor() { }

}