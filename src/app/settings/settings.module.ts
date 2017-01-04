import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { SettingsPage } from './pages/settings/settings';

@NgModule({
  declarations: [
    SettingsPage
  ],
  imports: [
    SharedModule,
    IonicModule.forRoot(SettingsPage)
  ],
  entryComponents: [
    SettingsPage
  ],
  providers: []
})
export class SettingsModule {}