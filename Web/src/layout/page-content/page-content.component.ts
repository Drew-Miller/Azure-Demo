import { Component } from '@angular/core';

@Component({
  selector: 'page-content',
  template: `
    <div class="page-container"><ng-content></ng-content></div>
  `,
  styles: [`
    .page-container {
      padding: 30px;
    }
  `]
})
export class PageContentComponent { }
