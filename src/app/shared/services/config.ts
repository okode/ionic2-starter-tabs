import { Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Config } from '../models/config';
import { ConfigInt } from '../models/config-int';
import { ConfigPre } from '../models/config-pre';
import { ConfigPro } from '../models/config-pro';

@Injectable()
export class ConfigService {

  private static configs = [ new ConfigInt(), new ConfigPre(), new ConfigPro() ];
  private config: Config;

  constructor(private actionSheetCtrl: ActionSheetController) {
    this.config = ConfigService.configs[0];
    if (ConfigService.configs.length > 1) {
      this.actionSheetCtrl.create(
        {
          title: 'Select configuration',
          buttons: ConfigService.configs.map((c: Config) => ({ text: c.name, handler: () => { this.config = c; } }))
        }
      ).present();
    }
  }

  getConfig() {
    return this.config;
  }

}

