import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TabsComponent } from './components/tabs/tabs';
import { ConfigService } from './services/config';

export class CrashlyticsErrorHandler extends IonicErrorHandler {

  constructor() {
    super();
  }

  handleError(error) {
    super.handleError(error);
    if (typeof fabric != 'undefined') {
      if (error instanceof Error) {
        let e: Error = error;
        fabric.Crashlytics.sendNonFatalCrash(e.message + '\n' + e.stack);
      } else {
        fabric.Crashlytics.sendNonFatalCrash(JSON.stringify(error));
      }
      fabric.Crashlytics.sendCrash();
    }
  }

}

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    IonicModule.forRoot(TabsComponent)
  ],
  entryComponents: [
    TabsComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: CrashlyticsErrorHandler },
    { provide: ConfigService, useClass: ConfigService }
  ]
})
export class CoreModule { }
