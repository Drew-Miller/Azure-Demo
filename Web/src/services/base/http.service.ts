import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export abstract class HttpService {
  protected textHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }),
    responseType: 'text' as 'json'
  };

  public constructor(protected EndPoint: string, protected Controller: string, protected httpClient: HttpClient) {
    this.Controller = this.Controller.replace(/\//gi, '');
  }

  protected BuildUrl(action: string = null, query: { param: string, value: string}[] = null): string {
    return this.EndPoint + '/' + this.Controller +
      (action !== null ? '/' + action : '') +
      (query !== null ? '?' + this.BuildQuery(query) : '');
  }

  private BuildQuery(query: { param: string, value: string}[]): string {
    let result = '';
    query.forEach((q) => {
      const param = q.param.replace(/[\/&=]/gi, '');
      const value = this.SanitizeQuery(q.value);
      result = result.concat(`&${param}=${value}`);
    });
    return result;
  }

  private SanitizeQuery(x: string): string {
    return x.trim()
      .replace(' ', '%20')
      .replace('/', '%2F')
      .replace('=', '%3D');
  }
}
