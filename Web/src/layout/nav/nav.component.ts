import { Component, Inject, OnInit } from '@angular/core';
import { ENV_TOKEN, LAYOUT_TOKEN } from 'config/config.bundle';
import { LayoutBase } from '../base/layout.base';

@Component({
  selector: `app-nav`,
  templateUrl: `./nav.component.html`,
  styleUrls: [`./nav.component.sass`],
  inputs: LayoutBase.Inputs,
  outputs: LayoutBase.Outputs
})
export class NavComponent extends LayoutBase<boolean> implements OnInit {
  public title: string;
  public logo: string;
  public height: string;
  public teamGuid: string;

  public constructor(
      @Inject(LAYOUT_TOKEN) private layout,
      @Inject(ENV_TOKEN) private env) {
    super(layout);
  }

  public ngOnInit() {
    this.LoadEnvironment();
    this.LoadLayout();
  }

  public LoadEnvironment() {
    this.title = this.env.SiteTitle;
    this.logo = this.env.SiteLogo;
  }

  public LoadLayout() {
    this.height = this.layout.navHeight;
  }
}
