import { NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';
import { DirectivesModule } from 'directives/directives.module';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    NgFormsModule,
    DirectivesModule
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})
export class DialogsModule { }
