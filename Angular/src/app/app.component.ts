import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'App';
  text: any;
  loaded = false;

  public constructor(private httpClient: HttpClient) { }

  public ngOnInit() {
    const apiEndpoint = environment.api;
    const url = apiEndpoint + "/Data";
    this.httpClient.get(url)
      .subscribe({
        next: (x) => {
          const data = x as Data;
          this.text = data.result ? data.result : 'Could not read response';
          this.loaded = true;
        },
        error: (x) => {
          this.text = "Could not load response.";
          this.loaded = true;
        }
      })
  }
}
