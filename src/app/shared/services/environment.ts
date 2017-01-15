import { Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Environment } from '../models/environment';

@Injectable()
export class EnvironmentService {

  private environment: Environment;

  constructor(private actionSheetCtrl: ActionSheetController) {
    let buttons = Object.keys(Environment)
      .map(k => Environment[k])
      .filter(v => typeof v === "string")
      .map((n: string) => ({ text: n, handler: () => { this.environment = Environment[n] } }));
    this.actionSheetCtrl.create({ title: 'Select environment', buttons: buttons}).present();
  }

  current() {
    return this.environment;
  }

  currentName() {
    return (typeof this.environment !== 'undefined') ? Environment[this.environment] : 'undefined';
  }

}

