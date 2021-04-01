import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'config/config.bundle';
import { Greeting } from 'models/models.bundle';
import { ApiService } from './base/api.service';

@Injectable()
export class DataService extends ApiService {

  public constructor(@Inject(ENV_TOKEN) env: {serviceEndpoint}, httpClient: HttpClient) {
    super(env.serviceEndpoint, 'Data', httpClient);
  }

  public Get(): Observable<Greeting> {
    return this.httpClient.get<Greeting>(this.BuildUrl('Greeting'));
  }
}
