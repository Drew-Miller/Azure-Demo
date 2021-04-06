import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'config/config.bundle';
import { ApiService } from './base/api.service';

@Injectable()
export class DataService extends ApiService {

  public constructor(@Inject(ENV_TOKEN) env: {serviceEndpoint}, httpClient: HttpClient) {
    super(env.serviceEndpoint, 'Data', httpClient);
  }

  public Get(): Observable<string> {
    return this.httpClient.get<string>(this.BuildUrl('Greeting'), this.textHeaders);
  }
}
