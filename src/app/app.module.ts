import { NgModule } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

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
  declarations: [ App ],
  imports: [
    IonicModule.forRoot(App),
	SharedModule,
    CoreModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [ App ],
  providers: [ { provide: ErrorHandler, useClass: CrashlyticsErrorHandler } ]
})
export class AppModule {}
