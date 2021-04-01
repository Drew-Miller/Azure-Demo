import { InjectionToken } from '@angular/core';

export const LAYOUT_TOKEN = new InjectionToken('layout.token');

export const LAYOUT = {
  showNav: 'false',  // if the nav is opened at nav start
  sideNavMode: 'over', // the sidenav mode is 'over' or 'side'
  rememberNavPosition: 'false', // determines if a cookie is set for opening / closing the navbar
  navHeight: '60px', // height of the header
  footerHeight: '60px', // height of the footer
  isBackDropContained: 'true', // determines if the backdrop scrolls it's own content
};
