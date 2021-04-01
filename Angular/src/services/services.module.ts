import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService, DemoTriggerService, FoodService } from './services.bundle';

@NgModule({
  providers: [DataService, DemoTriggerService, FoodService],
  imports: [HttpClientModule]
})
export class ServicesModule { }
