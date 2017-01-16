import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionSheetController, ToastController } from 'ionic-angular';

@Injectable()
export class ConfigService {

  private config: any;
  private environment: string;

  constructor(private http: Http, private actionSheetCtrl: ActionSheetController, private toastCtrl: ToastController) {
    this.http
      .get('/assets/config/config.json')
      .subscribe(res => {
        let configs = res.json();
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
                      this.environment = environment;
                      this.config = configs['default'];
                      Object.assign(this.config, configs[environment]);
                      actionSheet.dismiss().then(() => { this.toastCtrl.create( { message: `${environment} selected`, duration: 2000 } ).present(); });
                      return false;
                    }
                }))
            }
          );
          actionSheet.present();
        }
      });
  }

  getConfig() {
    return this.config;
  }

  getEnvironment() {
    return this.environment;
  }

}

