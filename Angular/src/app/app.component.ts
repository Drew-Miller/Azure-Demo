import { Component, OnInit } from '@angular/core';
import { Greeting } from 'src/models/greeting';
import { User } from 'src/models/user';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'App';
  text = '';
  users: User[] = [];
  loadingGreeting = true;
  loadingUsers = true;

  public constructor(private service: AppService) { }

  public ngOnInit() {
    console.log('init');
    this.service.GetGreeting().subscribe({
      next: (x: Greeting) => this.text = x.result,
      error: (error) => console.log(error),
      complete: () => this.loadingGreeting = false
    });
    
    this.service.GetUsers().subscribe({
      next: (x: User[]) => this.users = x,
      error: (error) => console.log(error),
      complete: () => this.loadingUsers = false
    });
  }
}
