import {NgModule} from '@angular/core';

// Angular Modules
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule {}
