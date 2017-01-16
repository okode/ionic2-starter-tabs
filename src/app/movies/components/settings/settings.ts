import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigService } from '../../../core/services/config';

@Component({
  selector: 'settings-component',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  constructor(private configService: ConfigService, private navCtrl: NavController) { }

}