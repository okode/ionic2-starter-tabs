import { IonicErrorHandler } from 'ionic-angular';

export class CrashlyticsErrorHandler extends IonicErrorHandler {

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
