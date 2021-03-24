import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'config/environment.token';
import { FunctionService } from './base/function.service';

@Injectable()
export class DemoTriggerService extends FunctionService {
  public constructor(@Inject(ENV_TOKEN) env: {functionEndpoint, demoTriggerCode}, httpClient: HttpClient) {
    super(env.functionEndpoint, 'DemoTrigger', env.demoTriggerCode, httpClient);
  }

  public Get(v: string = 'Azure'): Observable<string> {
    const nameQuery = { param: 'name', value: v };
    return this.httpClient.get<string>(this.BuildUrl(null, [this.CodeQuery, nameQuery]), this.textHeaders);
  }
}
