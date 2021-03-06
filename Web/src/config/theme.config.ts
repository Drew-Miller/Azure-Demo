import { InjectionToken } from '@angular/core';

export const THEME_TOKEN = new InjectionToken('theme.token');

// define theme classes here
const light = 'app-light-theme';
const dark = 'app-dark-theme';

// add theme to the constant
// the list is to check if a theme class is valid.
export const THEMES = {
  list: [light, dark],
  light,
  dark
};
