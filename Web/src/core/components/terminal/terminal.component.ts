import { Component } from '@angular/core';
import { ModelBaseComponent } from '../base/base.bundle';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.sass'],
  inputs: ModelBaseComponent.Inputs,
  outputs: ModelBaseComponent.Outputs,
  host: {
    class: 'terminal'
  }
})
export class TerminalComponent extends ModelBaseComponent<string> {}
