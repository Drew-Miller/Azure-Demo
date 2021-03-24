import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable()
export abstract class ApiService extends HttpService {
  public constructor(endPoint: string, controller: string, httpClient: HttpClient) {
    super(endPoint, controller, httpClient);
  }
}
