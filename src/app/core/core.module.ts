import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsComponent } from './components/tabs/tabs';
import { HomeComponent } from './components/home/home';
import { SettingsComponent } from './components/settings/settings';
import { MoviesService } from './services/movies';

@NgModule({
  declarations: [
    TabsComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    IonicModule.forRoot(TabsComponent)
  ],
  entryComponents: [
    TabsComponent,
    HomeComponent,
    SettingsComponent
  ],
  providers: [ provide: MoviesService, useClass: MoviesService ]
})
export class CoreModule { }
