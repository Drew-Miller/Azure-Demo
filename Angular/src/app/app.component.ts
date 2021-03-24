import { Component, OnInit } from '@angular/core';
import { Greeting, User } from 'models/models.bundle';
import { DataService, FoodService, FunctionService } from 'services/services.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'App';
  greeting = '';
  function = '';
  users: User[] = [];
  loadingGreeting = true;
  loadingFunction = true;
  loadingUsers = true;

  public constructor(
      private dataService: DataService,
      private foodService: FoodService,
      private functionService: FunctionService) { }

  public ngOnInit() {
    this.dataService.GetGreeting().subscribe({
      next: (x: Greeting) => this.greeting = x.result,
      error: (error) => console.log(error),
      complete: () => this.loadingGreeting = false
    });

    this.functionService.GetFunction('Azure Function').subscribe({
      next: (x: string) => this.function = x,
      error: (error) => console.log(error),
      complete: () => this.loadingFunction = false
    });

    this.foodService.GetUsers().subscribe({
      next: (x: User[]) => this.users = x,
      error: (error) => console.log(error),
      complete: () => this.loadingUsers = false
    });
  }
}
