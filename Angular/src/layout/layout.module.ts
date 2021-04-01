import { NgModule } from '@angular/core';

import { SharedModule } from 'core/shared.module';
import { ServicesModule } from 'services/services.module';

import { LayoutMainComponent } from './main/main.component';

@NgModule({
  imports: [SharedModule, ServicesModule],
  declarations: [LayoutMainComponent],
  exports: [LayoutMainComponent]
})
export class LayoutModule { }
