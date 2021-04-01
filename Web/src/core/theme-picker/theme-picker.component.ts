import { Component, Inject, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeHelper } from 'core/components/helpers/theme-helper';
import { COOKIE_OPTIONS, THEME_OPTIONS } from 'config/bundle';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html'
})
export class ThemePickerComponent {
  @Input() color: string;
  public helper: ThemeHelper;

  public constructor(@Inject(COOKIE_OPTIONS) cookies, @Inject(THEME_OPTIONS) public themes, overlay: OverlayContainer) {
    this.helper = new ThemeHelper(cookies, themes, overlay);
  }
}
