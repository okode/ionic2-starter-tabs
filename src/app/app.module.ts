import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    IonicModule.forRoot(App),
    CoreModule,
    MainModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    App
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

