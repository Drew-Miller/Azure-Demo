import { NgModule } from '@angular/core';
import { DataService, DemoTriggerService, FoodService } from './services.bundle';

@NgModule({
  providers: [DataService, DemoTriggerService, FoodService]
})
export class ServicesModule { }
