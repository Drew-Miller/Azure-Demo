import { AfterContentInit, Directive, Inject } from '@angular/core';
import { LAYOUT_OPTIONS } from 'config/bundle';
import { ModelBase } from 'core/components/bundle';

@Directive()
export abstract class LayoutBase<T> extends ModelBase<T> implements AfterContentInit {
  public static Inputs = ['hasNav', 'hasSideNav', 'hasFooter', ...ModelBase.Inputs];
  public static Outputs = [...ModelBase.Outputs];

  public hasNav: boolean;
  public hasSideNav: boolean;
  public hasFooter: boolean;

  public top = '0px';
  public bottom = '0px';

  constructor(@Inject(LAYOUT_OPTIONS) private layoutConfig) {
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
