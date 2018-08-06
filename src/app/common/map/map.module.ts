import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'API_KEY'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }
