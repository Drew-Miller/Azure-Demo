import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'config/environment.token';
import { FunctionService } from './base/function.service';

@Injectable()
export class DemoTriggerService extends FunctionService {
  public constructor(@Inject(ENV_TOKEN) env: {functionEndpoint, functionCode}, httpClient: HttpClient) {
    super(env, httpClient);
  }

  public Get(query: string = 'Azure'): Observable<string> {
    const url = this.Endpoint + this.Controller + this.SanitizeQuery(query);
    return this.httpClient.get<any>(url, this.textHeaders);
  }
}
