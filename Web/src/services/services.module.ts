import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService, DemoTriggerService, FoodService, LoremIpsomService } from './services.bundle';

@NgModule({
  providers: [DataService, DemoTriggerService, FoodService, LoremIpsomService],
  imports: [HttpClientModule]
})
export class ServicesModule { }
