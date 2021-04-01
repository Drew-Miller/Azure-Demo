import { OverlayContainer } from '@angular/cdk/overlay';
import { Inject } from '@angular/core';
import { COOKIE_OPTIONS, THEME_OPTIONS } from 'config/bundle';

export class ThemeHelper {
  private body: HTMLElement;

  public constructor(
      @Inject(COOKIE_OPTIONS) private cookies: { theme },
      @Inject(THEME_OPTIONS) private themes: { list: any[] },
      private overlay: OverlayContainer) {
    this.body = document.getElementById('body');
  }

  public static AppInit(
      @Inject(COOKIE_OPTIONS) cookies: { theme },
      @Inject(THEME_OPTIONS) themes,
      overlay: OverlayContainer) {
    const helper = new ThemeHelper(cookies, themes, overlay);
    const cookie = localStorage.getItem(cookies.theme);
    if (cookie) {
      helper.SetTheme(cookie);
    }
  }

  public SetTheme(theme: string) {
    if (this.themes.list.indexOf(theme) > -1) {
      localStorage.setItem(this.cookies.theme, theme);
      this.RemoveAppStyles([...this.themes.list]);
      this.AddAppStyles([theme]);
    }
  }

  private AddAppStyles(styles: string[]) {
    styles.forEach(style => {
      this.body.classList.add(style);
      this.overlay.getContainerElement().classList.add(style);
    });
  }

  private RemoveAppStyles(styles: string[]) {
    styles.forEach(style => {
      this.body.classList.remove(style);
      this.overlay.getContainerElement().classList.remove(style);
    });
  }
}
