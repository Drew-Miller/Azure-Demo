import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  LoremIpsomService
} from './bundle';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    LoremIpsomService
  ]
})
export class ServicesModule { }
