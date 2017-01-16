import { Injectable } from '@angular/core';
import { ActionSheetController, ToastController } from 'ionic-angular';
import { Config } from '../models/config';
import { ConfigInt } from '../models/config-int';
import { ConfigPre } from '../models/config-pre';
import { ConfigPro } from '../models/config-pro';

@Injectable()
export class ConfigService {

  private static configs = [ new ConfigInt(), new ConfigPre(), new ConfigPro() ];
  private config: Config;

  constructor(private actionSheetCtrl: ActionSheetController, private toastCtrl: ToastController) {
    if (ConfigService.configs.length > 1) {
      let actionSheet = this.actionSheetCtrl.create(
        {
          title: 'Select configuration',
          buttons: ConfigService.configs.map((c: Config) => (
            {
              text: c.name,
              handler: () =>
                { 
                  this.config = c;
                  actionSheet.dismiss().then(() => { this.toastCtrl.create( { message: `${c.name} selected`, duration: 2000 } ).present(); });
                  return false;
                }
             }))
        }
      );
      actionSheet.present();
    }
  }

  getConfig() {
    return this.config;
  }

}

