import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionSheetController, ToastController } from 'ionic-angular';

@Injectable()
export class ConfigService {

  private environment: string;
  private config: any;

  constructor(private http: Http, private actionSheetCtrl: ActionSheetController, private toastCtrl: ToastController) {
    this.http
      .get('assets/config/config.json')
      .subscribe(res => {
        let configs = res.json();
        this.setConfig('default', configs['default']);
        let environments = Object.keys(configs).filter(environment => environment !== 'default');
        if (environments.length > 1) {
          let actionSheet = this.actionSheetCtrl.create(
            {
              title: 'Select environment',
              buttons: environments.map(environment => (
                {
                  text: environment,
                  handler: () =>
                    {
                      this.setConfig(environment, configs['default'], configs[environment]);
                      actionSheet.dismiss().then(() => { this.toastCtrl.create( { message: `${environment} selected`, duration: 2000 } ).present(); });
                      return false;
                    }
                }))
            }
          );
          actionSheet.present();
        } else {
          if (environments.length == 1) {
            this.setConfig(environments[0], configs['default'], configs[0]);
          }
        }
      });
  }

  private setConfig(environment: string, configBase: any, configEnvironment?: any) {
    this.environment = environment;
    this.config = configBase;
    if (configEnvironment != null) {
      Object.assign(this.config, configEnvironment);    
    }
  }

  getConfig() {
    return this.config;
  }

  getEnvironment() {
    return this.environment;
  }

}

