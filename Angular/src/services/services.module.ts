import { NgModule } from '@angular/core';
import { DataService, FoodService, FunctionService } from './services.bundle';

@NgModule({
  providers: [DataService, FoodService, FunctionService]
})
export class ServicesModule { }
