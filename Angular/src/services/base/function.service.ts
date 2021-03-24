import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_TOKEN } from 'config/tokens.bundle';
import { HttpService } from './http.service';

@Injectable()
export abstract class FunctionService extends HttpService {
  public constructor(@Inject(ENV_TOKEN) env: {functionEndpoint, functionCode}, httpClient: HttpClient) {
    super(httpClient);
    this.Endpoint = env.functionEndpoint;
    this.Controller = `/api/DemoTrigger/?code=${this.SanitizeQuery(env.functionCode)}&name=`;
  }
}
