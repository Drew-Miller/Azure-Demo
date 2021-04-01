import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { NgFormsModule } from './ng.forms.module';

// Shared Components
import { ThemePickerComponent } from './components.bundle';

@NgModule({
  imports : [
    SharedModule,
    MaterialModule,
    NgFormsModule
  ],
  declarations: [
    ThemePickerComponent
  ],
  exports: [
    ThemePickerComponent
  ]
})
export class CoreModule { }
