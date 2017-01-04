import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { AboutPage } from './pages/about/about';

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    SharedModule,
    IonicModule.forRoot(AboutPage)
  ],
  entryComponents: [
    AboutPage
  ],
  providers: []
})
export class AboutModule {}