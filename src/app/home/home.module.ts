import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { HomePage } from './pages/home/home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    SharedModule,
    IonicModule.forRoot(HomePage)
  ],
  entryComponents: [
    HomePage
  ],
  providers: []
})
export class HomeModule {}