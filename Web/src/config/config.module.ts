import { APP_INITIALIZER, NgModule } from '@angular/core';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { environment } from 'environments/environment';
import {
  APP,
  COOKIES,
  COOKIE_OPTIONS,
  ENV_OPTIONS,
  LAYOUT,
  LAYOUT_OPTIONS,
  THEMES,
  THEME_OPTIONS
} from 'config/bundle';
import { CookieLoader, ThemeLoader } from 'config/bundle.loader';

const releaseDate = new Date();
releaseDate.setHours(0, 0, 0, 0);

@NgModule({
  providers: [
    {
      provide: ENV_OPTIONS,
      useValue: { ...environment, ...APP }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: CookieLoader,
      deps: [COOKIE_OPTIONS, ENV_OPTIONS],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ThemeLoader,
      deps: [COOKIE_OPTIONS, THEME_OPTIONS, OverlayContainer],
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
    { provide: COOKIE_OPTIONS, useValue: COOKIES },
    { provide: LAYOUT_OPTIONS, useValue: LAYOUT },
    { provide: THEME_OPTIONS, useValue: THEMES },
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer
    }
  ]
})
export class ConfigModule { }
