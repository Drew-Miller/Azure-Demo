import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { COOKIE_TOKEN, LAYOUT_TOKEN } from 'config/config.bundle';
import { LayoutBase } from 'layout/base/layout.base';

@Component({
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
  inputs: LayoutBase.Inputs,
  outputs: LayoutBase.Outputs
})
export class SideNavComponent extends LayoutBase<boolean> implements OnChanges {
  @Input() hasNav: boolean;
  public mode: string;
  public top = '0';

  constructor(@Inject(COOKIE_TOKEN) layoutConfig, @Inject(LAYOUT_TOKEN) private cookies) {
    super(layoutConfig);
    this.mode = layoutConfig.sideNavMode;
  }

  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    localStorage.setItem(this.cookies.showNav, this.model.toString());
  }
}
