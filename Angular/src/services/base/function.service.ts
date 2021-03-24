import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable()
export abstract class FunctionService extends HttpService {
  protected CodeQuery: { param: string, value: string};
  public constructor(endPoint: string, controller: string, code: string, httpClient: HttpClient) {
    super(endPoint + '/api', controller, httpClient);
    this.CodeQuery = { param: 'code', value: code };
  }
}
