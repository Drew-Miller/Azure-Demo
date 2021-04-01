import { Component } from '@angular/core';
import { SearchBaseComponent } from 'core/components/base/base.bundle';

@Component({
  selector: `nav-search`,
  templateUrl: `./nav-search.component.html`,
  styleUrls: [`./nav-search.component.sass`],
  inputs: SearchBaseComponent.Inputs,
  outputs: SearchBaseComponent.Outputs
})
export class NavSearchComponent extends SearchBaseComponent { }
