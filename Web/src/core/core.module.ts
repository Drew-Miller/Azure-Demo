import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { NgFormsModule } from './ng.forms.module';

// Shared Components
import { BigCardComponent, ThemePickerComponent, TerminalComponent } from './components.bundle';

@NgModule({
  imports : [
    SharedModule,
    MaterialModule,
    NgFormsModule
  ],
  declarations: [
    BigCardComponent,
    ThemePickerComponent,
    TerminalComponent
  ],
  exports: [
    BigCardComponent,
    ThemePickerComponent,
    TerminalComponent
  ]
})
export class CoreModule { }
