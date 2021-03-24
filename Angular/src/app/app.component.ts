import { Component, OnInit } from '@angular/core';
import { Greeting, Food } from 'models/models.bundle';
import { DataService, FoodService, DemoTriggerService } from 'services/services.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'App';
  greeting = '';
  function = '';
  foods: Food[] = [];
  loadingGreeting = true;
  loadingFunction = true;
  loadingFoods = true;

  public constructor(
      private dataService: DataService,
      private foodService: FoodService,
      private demoTriggerService: DemoTriggerService) { }

  public ngOnInit(): void {
    this.dataService.Get().subscribe({
      next: (x: Greeting) => this.greeting = x.result,
      error: (error) => console.log(error),
      complete: () => this.loadingGreeting = false
    });

    this.demoTriggerService.Get('Azure Function').subscribe({
      next: (x: string) => this.function = x,
      error: (error) => console.log(error),
      complete: () => this.loadingFunction = false
    });

    this.foodService.Get().subscribe({
      next: (x: Food[]) => {
        this.foods = x;
      },
      error: (error) => console.log(error),
      complete: () => this.loadingFoods = false
    });
  }
}
