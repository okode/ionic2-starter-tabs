import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ActionSheetController } from 'ionic-angular';

type PromiseResolve = (value?: void | PromiseLike<void>) => void;
type PromiseReject = (reason?: any) => void;

@Injectable()
export class ConfigService {

  private static readonly ENVIRONMENT_KEY = 'configEnvironmentKey';
  private static readonly CONFIG_JSON_PATH = 'assets/config/config.json';

  private environment: string;
  private config: any;
  private version: string;
  private isReady = false;
  private readyPromiseResolve: PromiseResolve;
  private readyPromiseReject: PromiseReject;

  constructor(
    private storage: Storage,
    private http: Http,
    private actionSheetCtrl: ActionSheetController) {}

  ready() {
    if(this.isReady) return Promise.resolve();
    this.initConfigs();
    return new Promise<void>((resolve, reject) => {
      this.readyPromiseResolve = resolve;
      this.readyPromiseReject = reject;
    });
  }

  private initConfigs() {
    this.http
      .get(ConfigService.CONFIG_JSON_PATH)
      .subscribe(
        res => {
          let configs = res.json();
          if (configs == null || Object.keys(configs).length == 0) {
            this.readyPromiseReject();
            console.log(`ConfigService fails: '${ConfigService.CONFIG_JSON_PATH}' is empty or invalid`);
            return;
          }
          let environments = Object.keys(configs).filter(environment => environment !== 'default');
          if (environments == null || environments.length == 0) {
            this.setConfig(false, 'default', configs['default']);
          } else {
            this.storage.ready().then(() => {
              this.storage.get(ConfigService.ENVIRONMENT_KEY).then(storedEnvironment => {
                if (storedEnvironment == null) {
                  console.log('No saved environment detected, will prompt user for selection');
                  if (environments.length > 1) {
                    this.showEnvironmentActionSheet(environments, configs);
                  } else {
                    this.setConfig(true, environments[0], configs['default'], configs[0]);
                  }
                } else {
                  console.log(`Detected saved environment: ${storedEnvironment}`);
                  this.setConfig(false, storedEnvironment, configs['default'], configs[storedEnvironment]);
                }
              });
            });
          }
        },
        err => {
          this.readyPromiseReject();
          console.log(`ConfigService fails: Not found '${ConfigService.CONFIG_JSON_PATH}'`);
        }
      );
  }

  private showEnvironmentActionSheet(environments, configs) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select environment',
      enableBackdropDismiss: false,
      buttons: environments.map(environment => ({
          text: environment,
          handler: () => {
            this.setConfig(true, environment, configs['default'], configs[environment]);
          }
        })
      )
    });
    actionSheet.present();
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
    this.isReady = true;
    this.readyPromiseResolve();
  }

  getConfig() {
    return this.config;
  }

  getEnvironment() {
    return this.environment;
  }

  getVersion() {
    if (this.version) return this.version;
    if (!this.config) return null;
    this.version = this.config.version;
    if (this.config.versionEnv && this.config.versionEnv != '') {
      this.version = `${this.version}-${this.config.versionEnv}`;
    }
    return this.version;
  }

}
