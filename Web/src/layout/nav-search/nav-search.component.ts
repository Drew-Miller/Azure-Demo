import { Component } from '@angular/core';
import { SearchBase } from 'core/components/base/bundle';

@Component({
  selector: `nav-search`,
  templateUrl: `./nav-search.component.html`,
  styleUrls: [`./nav-search.component.sass`],
  inputs: SearchBase.Inputs,
  outputs: SearchBase.Outputs
})
export class NavSearchComponent extends SearchBase { }
