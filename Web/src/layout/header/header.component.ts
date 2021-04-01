import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LAYOUT_OPTIONS } from 'config/bundle';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [`./header.component.sass`]
})
export class HeaderComponent {
  public height: string;
  public title = 'Header';

  constructor(@Inject(LAYOUT_OPTIONS) layoutOptions, router: Router) {
    this.height = layoutOptions.navHeight;
    const routerSub = router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe({
      next: (x: NavigationEnd) => {
        this.title = x.urlAfterRedirects.split('/')
            .filter(y => y)
            .map(z => z.toUpperCase())[0];
      }
    });
  }
}
