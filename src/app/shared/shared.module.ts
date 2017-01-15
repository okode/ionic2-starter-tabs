import { NgModule } from '@angular/core';
import { ConfigService } from './services/config';

@NgModule({
  declarations: [],
  imports: [] ,
  entryComponents: [],
  providers: [ { provide: ConfigService, useClass: ConfigService } ]
})
export class SharedModule {}