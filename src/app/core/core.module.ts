import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsComponent } from './components/tabs/tabs';
import { CrashlyticsErrorHandler } from './handlers/crashlytics';
import { Storage } from '@ionic/storage';
import { ConfigService } from './services/config';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [ IonicModule ],
  entryComponents: [
    TabsComponent
  ],
  providers: [
    Storage,
    { provide: ErrorHandler, useClass: CrashlyticsErrorHandler },
    { provide: ConfigService, useClass: ConfigService }
  ]
})
export class CoreModule { }
