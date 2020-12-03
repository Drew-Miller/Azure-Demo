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
  text: any;
  users: User[];
  loadingGreeting = true;
  loadingUsers = true;

  public constructor(private service: AppService) { }

  public ngOnInit() {
    this.service.GetGreeting()
      .subscribe({
        next: (x) => {
          const data = x as Greeting;
          this.text = data.result;
          this.loadingGreeting = false;
        },
        error: (x) => {
          this.loadingGreeting = false;
        }
      });
    
      this.service.GetUsers()
      .subscribe({
        next: (x) => {
          this.users = x as User[];
          this.loadingUsers = false;
        },
        error: (x) => {
          this.loadingGreeting = false;
        }
      });
  }
}
