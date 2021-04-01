import { Component, OnInit } from '@angular/core';
import { Greeting, Food } from 'models/models.bundle';
import { DataService, FoodService, DemoTriggerService } from 'services/services.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  foods: Food[] = [];
  loadingFoods = true;

  public constructor(private foodService: FoodService) { }

  public ngOnInit(): void {
    this.foodService.Get().subscribe({
      next: (x: Food[]) => this.foods = x,
      error: (error) => console.log(error),
      complete: () => this.loadingFoods = false
    });
  }
}
