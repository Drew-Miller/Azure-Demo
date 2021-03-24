import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'config/environment.token';
import { Greeting } from 'models/models.bundle';
import { ApiService } from './base/api.service';

@Injectable()
export class DataService extends ApiService {

  public constructor(@Inject(ENV_TOKEN) env: {serviceEndpoint}, httpClient: HttpClient) {
    super(env, httpClient);
    this.Controller = '/Data/Greeting';
  }

  public Get(): Observable<Greeting> {
    const url = this.Endpoint + this.Controller;
    return this.httpClient.get<Greeting>(url);
  }
}
