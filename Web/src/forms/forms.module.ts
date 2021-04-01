import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';
import { DirectivesModule } from 'directives/directives.module';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    NgFormsModule,
    DirectivesModule
  ],
  declarations: [
  ],
  exports: [
  ],
})
export class AppFormsModule { }
