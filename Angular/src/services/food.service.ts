import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { User, Greeting } from 'models/models.bundle';
import { HttpService } from './base/http.service';

@Injectable()
export class FoodService extends HttpService {
  public constructor(httpClient: HttpClient) {
    super(httpClient);
    this.Controller = '/Food/';
  }

  public Get(): Observable<Greeting> {
    const url = this.Endpoint + this.Controller;
    return this.httpClient.get<Greeting>(url);
  }
}
