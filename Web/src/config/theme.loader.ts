import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeHelper } from 'core/components/helpers/bundle';

export const ThemeLoader = (cookies, themes, overlay: OverlayContainer) => {
  return () => ThemeHelper.AppInit(cookies, themes, overlay);
};
