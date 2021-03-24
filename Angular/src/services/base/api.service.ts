import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_TOKEN } from 'config/tokens.bundle';
import { HttpService } from './http.service';

@Injectable()
export abstract class ApiService extends HttpService {
  public constructor(@Inject(ENV_TOKEN) env: {serviceEndpoint}, httpClient: HttpClient) {
    super(httpClient);
    this.Endpoint = env.serviceEndpoint;
  }
}
