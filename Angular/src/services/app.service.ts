import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';
import { Greeting } from 'src/models/greeting';

@Injectable()
export class AppService {
  private apiEndpoint = environment.api;
  private controller = "Data";

  public constructor(private httpClient: HttpClient) {}

  public GetGreeting(): Observable<Greeting> {
    const url = this.apiEndpoint + `/${this.controller}/Greeting`;
    return this.httpClient.get<Greeting>(url);
  }

  public GetUsers(): Observable<User[]> {
    const url = this.apiEndpoint + `/${this.controller}/Users`;
    return this.httpClient.get<User[]>(url);
  }
}