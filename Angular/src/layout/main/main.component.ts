import { Component, OnInit } from '@angular/core';
import { Greeting } from 'models/greeting';
import { DataService } from 'services/data.service';
import { DemoTriggerService } from 'services/demotrigger.service';

@Component({
  selector: 'layout-main',
  templateUrl: './main.component.html'
})
export class LayoutMainComponent implements OnInit {
  greeting = '';
  function = '';
  loadingGreeting = true;
  loadingFunction = true;

  public constructor(
    private dataService: DataService,
    private demoTriggerService: DemoTriggerService) { }

  public ngOnInit(): void {
    const dataSub = this.dataService.Get().subscribe({
      next: (x: Greeting) => this.greeting = x.result,
      error: (error) => console.log(error),
      complete: () => {
        this.loadingGreeting = false;
        dataSub.unsubscribe();
      }
    });

    const triggerSub = this.demoTriggerService.Get('Azure Function').subscribe({
      next: (x: string) => this.function = x,
      error: (error) => console.log(error),
      complete: () => {
        this.loadingFunction = false;
        triggerSub.unsubscribe();
      }
    });
  }
}
