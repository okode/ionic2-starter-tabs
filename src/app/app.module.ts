import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { App } from './app.component';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [ App ],
  imports: [
    IonicModule.forRoot(App),
    CoreModule,
    MoviesModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [ App ],
  providers: [ ]
})
export class AppModule {}
