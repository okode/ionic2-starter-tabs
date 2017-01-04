import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsPage } from './pages/tabs/tabs';

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(TabsPage)
  ],
  entryComponents: [
    TabsPage
  ],
  providers: []
})
export class CoreModule {}