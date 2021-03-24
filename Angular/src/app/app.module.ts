import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'environments/environment';
import { azureSecret } from 'secrets/azure.js';

import { ENV_TOKEN } from 'config/tokens.bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicesModule } from 'services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ServicesModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ENV_TOKEN, useValue: { ...environment, ...azureSecret }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
