import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsPage } from './pages/tabs/tabs';
import { HomePage } from './pages/home/home';
import { SettingsPage } from './pages/settings/settings';

@NgModule({
  declarations: [
    TabsPage,
    HomePage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(TabsPage)
  ],
  entryComponents: [
    TabsPage,
    HomePage,
    SettingsPage
  ],
  providers: []
})
export class CoreModule {}