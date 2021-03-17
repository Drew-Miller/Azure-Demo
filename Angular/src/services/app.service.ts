import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';
import { Greeting } from 'src/models/greeting';

@Injectable()
export class AppService {
  private serviceEndpoint = environment.serviceEndpoint;
  private functionEndpoint = environment.functionEndpoint;

  private functionOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }),
    responseType: 'text' as 'json'
  };

  public constructor(private httpClient: HttpClient) {}

  public GetGreeting(): Observable<Greeting> {
    const url = this.serviceEndpoint + `/Data/Greeting`;
    return this.httpClient.get<Greeting>(url);
  }

  public GetUsers(): Observable<User[]> {
    const url = this.serviceEndpoint + `/Data/Users`;
    return this.httpClient.get<User[]>(url);
  }

  public GetFunction(query: string = 'Azure'): Observable<any> {
    const url = this.functionEndpoint + `/api/DemoTrigger?name=${this.SanitizeQuery(query)}`;
    return this.httpClient.get<any>(url, this.functionOptions);
  }

  private SanitizeQuery(x: string) {
    return x.trim().split(' ').join('%20');
  }
}