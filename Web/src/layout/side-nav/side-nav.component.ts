import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { COOKIE_OPTIONS, LAYOUT_OPTIONS } from 'config/bundle';
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

  constructor(@Inject(LAYOUT_OPTIONS) layoutConfig, @Inject(COOKIE_OPTIONS) private cookies) {
    super(layoutConfig);
    this.mode = layoutConfig.sideNavMode;
  }

  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    localStorage.setItem(this.cookies.showNav, this.model.toString());
  }
}
