import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { NgFormsModule } from './ng.forms.module';

// Shared Components
import { ThemePickerComponent, TerminalComponent } from './components.bundle';

@NgModule({
  imports : [
    SharedModule,
    MaterialModule,
    NgFormsModule
  ],
  declarations: [
    ThemePickerComponent,
    TerminalComponent
  ],
  exports: [
    ThemePickerComponent,
    TerminalComponent
  ]
})
export class CoreModule { }
