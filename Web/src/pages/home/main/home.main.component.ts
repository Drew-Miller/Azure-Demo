import { Component, OnInit } from '@angular/core';
import { DataService, DemoTriggerService } from 'services/services.bundle';

@Component({
  templateUrl: `./home.main.component.html`,
  styleUrls: [`./home.main.component.sass`]
})
export class MainComponent implements OnInit {
  public function = 'Loading function...';
  public greeting = 'Loading greeting...';

  constructor(private dataTrigger: DataService, private demoTriggerService: DemoTriggerService) { }

  public ngOnInit() {
    const dataSub = this.dataTrigger.Get().subscribe({
      next: (x: string) => this.greeting = x,
      error: (error) => this.greeting = 'Could not load greeting.',
      complete: () => dataSub.unsubscribe()
    });

    const triggerSub = this.demoTriggerService.Get('Azure Function').subscribe({
      next: (x: string) => this.function = x,
      error: (error) => this.function = 'Could not load function.',
      complete: () => triggerSub.unsubscribe()
    });
  }
}
