import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ActionSheetController, ToastController } from 'ionic-angular';

@Injectable()
export class ConfigService {

  private static readonly ENVIRONMENT_KEY = 'configEnvironmentKey';

  private environment: string;
  private config: any;

  constructor(
    private storage: Storage,
    private http: Http,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController)
  {
    this.http
      .get('assets/config/config.json')
      .subscribe(res => {
        let configs = res.json();
        this.setConfig(false, 'default', configs['default']);
        let environments = Object.keys(configs).filter(environment => environment !== 'default');
        this.storage.ready().then(() => {
          this.storage.get(ConfigService.ENVIRONMENT_KEY).then(storedEnvironment => {
            if (storedEnvironment == null) {
              console.log('No saved environment detected, will prompt user for selection');
              if (environments.length > 1) {
                let actionSheet = this.actionSheetCtrl.create(
                  {
                    title: 'Select environment',
                    enableBackdropDismiss: false,
                    buttons: environments.map(environment => (
                      {
                        text: environment,
                        handler: () =>
                          {
                            this.setConfig(true, environment, configs['default'], configs[environment]);
                            actionSheet.dismiss().then(() => { this.toastCtrl.create( { message: `${environment} selected`, duration: 2000, position: 'top' } ).present(); });
                            return false;
                          }
                      }))
                  }
                );
                actionSheet.present();
              } else {
                if (environments.length == 1) {
                  this.setConfig(true, environments[0], configs['default'], configs[0]);
                }
              }
            } else {
              console.log(`Detected saved environment: ${storedEnvironment}`);
              this.setConfig(false, storedEnvironment, configs['default'], configs[storedEnvironment]);
            }
          });
        });
      });
  }

  private setConfig(save: boolean, environment: string, configBase: any, configEnvironment?: any) {
    console.log(`Applying environment: ${environment}`);
    this.environment = environment;
    this.config = configBase;
    if (configEnvironment != null) {
      Object.assign(this.config, configEnvironment);    
    }
    if (save) {
      console.log(`Saving environment: ${environment}`);
      this.storage.set(ConfigService.ENVIRONMENT_KEY, environment);
    }
  }

  getConfig() {
    return this.config;
  }

  getEnvironment() {
    return this.environment;
  }

  getVersion() {
    let version = '';
    if (this.config) {
      version = this.config.version;
      if (this.config.versionEnv && this.config.versionEnv != '') {
        version = `${version}-${this.config.versionEnv}`;
      }
    }
    return version;
  }

}
