import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'config/tokens.bundle';
import { Food } from 'models/models.bundle';
import { ApiService } from './base/api.service';

@Injectable()
export class FoodService extends ApiService {
  public constructor(@Inject(ENV_TOKEN) env: { serviceEndpoint }, httpClient: HttpClient) {
    super(env.serviceEndpoint, 'Food', httpClient);
  }

  public Get(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.BuildUrl());
  }
}
