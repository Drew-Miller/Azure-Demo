import { NgModule } from '@angular/core';

import { MessageRoutingModule } from './forms.routing.module';
import { MaterialModule } from 'core/material.module';

import { AppFormsModule } from 'forms/forms.module';

import { MainComponent } from './main/forms.main.component';

@NgModule({
  imports: [
    MessageRoutingModule,
    MaterialModule,
    AppFormsModule
  ],
  declarations: [
    MainComponent
  ]
})
export class FormsModule { }
