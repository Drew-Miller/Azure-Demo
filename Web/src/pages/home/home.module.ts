import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { CoreModule } from 'core/core.module';
import { DialogsModule } from 'dialogs/dialogs.module';

import { HomeRoutingModule } from './home.routing.module';
import { MainComponent } from './main/home.main.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    DialogsModule
  ],
  declarations: [
    MainComponent
  ]
})
export class HomeModule { }
