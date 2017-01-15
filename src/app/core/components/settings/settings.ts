import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnvironmentService } from '../../../shared/services/environment';

@Component({
  selector: 'settings-component',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  constructor(private environmentService: EnvironmentService, private navCtrl: NavController) { }

}