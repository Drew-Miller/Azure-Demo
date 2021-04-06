import { APP_INITIALIZER, NgModule } from '@angular/core';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { environment } from 'environments/environment';
import { azureSecrets } from 'secrets/azure.js';
import {
  APP,
  COOKIES,
  COOKIE_TOKEN,
  ENV_TOKEN,
  LAYOUT,
  LAYOUT_TOKEN,
  THEMES,
  THEME_TOKEN
} from 'config/config.bundle';
import { CookieLoader, ThemeLoader } from 'config/loader.bundle';

const releaseDate = new Date();
releaseDate.setHours(0, 0, 0, 0);

@NgModule({
  providers: [
    {
      provide: ENV_TOKEN,
      useValue: { ...environment, ...APP, ...azureSecrets }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: CookieLoader,
      deps: [COOKIE_TOKEN, ENV_TOKEN],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ThemeLoader,
      deps: [COOKIE_TOKEN, THEME_TOKEN, OverlayContainer],
      multi: true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' }
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(), height: '800px', width: '800px' }
    },
    { provide: COOKIE_TOKEN, useValue: COOKIES },
    { provide: LAYOUT_TOKEN, useValue: LAYOUT },
    { provide: THEME_TOKEN, useValue: THEMES },
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer
    }
  ]
})
export class ConfigModule { }
