import { Component, Inject, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeHelper } from 'core/helpers/theme-helper';
import { COOKIE_TOKEN, THEME_TOKEN } from 'config/config.bundle';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html'
})
export class ThemePickerComponent {
  @Input() color: string;
  public helper: ThemeHelper;

  public constructor(@Inject(COOKIE_TOKEN) cookies, @Inject(THEME_TOKEN) public themes, overlay: OverlayContainer) {
    this.helper = new ThemeHelper(cookies, themes, overlay);
  }
}
