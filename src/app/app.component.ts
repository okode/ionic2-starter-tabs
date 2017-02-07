import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsComponent } from './core/components/tabs/tabs';
import { ConfigService } from './core/services/config';

@Component({
  template: `<ion-nav [root]="rootComponent"></ion-nav>`
})
export class App {

  rootComponent = TabsComponent;

  constructor(platform: Platform, configService: ConfigService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    configService.ready().then(() => {
      console.log(`ConfigService ready. Environment: ${configService.getEnvironment()}`);
    });
  }
}
