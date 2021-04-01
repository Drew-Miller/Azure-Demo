import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from 'core/shared.module';
import { ServicesModule } from 'services/services.module';
import { LayoutModule } from 'layout/layout.module';

import { environment } from 'environments/environment';
import { azureSecret } from 'secrets/azure.js';
import { ENV_TOKEN } from 'config/tokens.bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ServicesModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ENV_TOKEN, useValue: { ...environment, ...azureSecret }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
