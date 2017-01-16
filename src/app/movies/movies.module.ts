import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeComponent } from './components/home/home';
import { SettingsComponent } from './components/settings/settings';
import { MoviesService } from './services/movies';

@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent
  ],
  imports: [ IonicModule ],
  entryComponents: [
    HomeComponent,
    SettingsComponent
  ],
  providers: [ { provide: MoviesService, useClass: MoviesService } ]
})
export class MoviesModule { }
