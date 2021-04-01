import { AfterContentInit, Directive, Inject } from '@angular/core';
import { LAYOUT_TOKEN } from 'config/config.bundle';
import { ModelBaseComponent } from 'core/components.bundle';

@Directive()
export abstract class LayoutBase<T> extends ModelBaseComponent<T> implements AfterContentInit {
  public static Inputs = ['hasNav', 'hasSideNav', 'hasFooter', ...ModelBaseComponent.Inputs];
  public static Outputs = [...ModelBaseComponent.Outputs];

  public hasNav: boolean;
  public hasSideNav: boolean;
  public hasFooter: boolean;

  public top = '0px';
  public bottom = '0px';

  constructor(@Inject(LAYOUT_TOKEN) private layoutConfig) {
    super();
  }

  public ngAfterContentInit() {
    if (this.hasNav) {
      this.top = this.layoutConfig.navHeight;
    }
    if (this.hasFooter) {
      this.bottom = this.layoutConfig.footerHeight;
    }
  }

  public GetContentHeight() {
    return `calc(100vh - ${this.top} - ${this.bottom})`;
  }
}
