import { Component, Inject } from '@angular/core';
import { LAYOUT_OPTIONS } from 'config/bundle';
import { LayoutBase } from '../base/layout.base';

@Component({
  selector: 'back-drop',
  templateUrl: './back-drop.component.html',
  styleUrls: [`./back-drop.component.sass`],
  inputs: LayoutBase.Inputs,
  outputs: LayoutBase.Outputs
})
export class BackDropComponent extends LayoutBase<any> {
  public isContained = false;
  constructor(@Inject(LAYOUT_OPTIONS) layoutConfig) {
    super(layoutConfig);
    this.isContained = layoutConfig.isBackDropContained === 'true';
  }
}
