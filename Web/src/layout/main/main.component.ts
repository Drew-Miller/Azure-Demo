import { Component, Inject } from '@angular/core';
import { COOKIE_TOKEN } from 'config/config.bundle';
import { SearchConsumer } from 'core/components/base/base.bundle';
import { SearchResult } from 'models/models.bundle';
import { LoremIpsomService } from 'services/services.bundle';

@Component({
  selector: 'app-layout',
  templateUrl: 'main.component.html'
})
export class MainComponent extends SearchConsumer {
  public showNav = false;

  constructor(@Inject(COOKIE_TOKEN) cookies, private loremIpsomService: LoremIpsomService) {
    super();
    if (cookies.rememberNavPosition) {
      this.showNav = localStorage.getItem(cookies.showNav) === 'true';
    }
  }

  public OnQuery(v: string) {
    let id = 0;
    this.loremIpsomService.Get(v.length).subscribe({
      next: (x: string[]) => this.results = x.map(y => {
       return {
        id: id++,
        data: y,
        text: y
       } as SearchResult;
      })
    });
  }

  public OnSearch(result: SearchResult) { }
}
