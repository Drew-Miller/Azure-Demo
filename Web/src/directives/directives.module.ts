import { NgModule } from '@angular/core';

import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';

@NgModule({
  imports: [
    SharedModule,
    NgFormsModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class DirectivesModule { }
