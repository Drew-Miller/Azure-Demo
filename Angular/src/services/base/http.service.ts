import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export abstract class HttpService {
  protected Endpoint: string;
  protected Controller: string;

  protected textHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }),
    responseType: 'text' as 'json'
  };

  public constructor(protected httpClient: HttpClient) {}

  protected SanitizeQuery(x: string): string {
    return x.trim()
      .replace(' ', '%20')
      .replace('/', '%2F')
      .replace('=', '%3D');
  }
}
