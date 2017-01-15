import { NgModule } from '@angular/core';
import { EnvironmentService } from './services/environment';

@NgModule({
  declarations: [],
  imports: [] ,
  entryComponents: [],
  providers: [ { provide: EnvironmentService, useClass: EnvironmentService } ]
})
export class SharedModule {}