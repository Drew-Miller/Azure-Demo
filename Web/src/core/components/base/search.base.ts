import { Component } from '@angular/core';
import { SearchResult } from 'models/bundle';
import { Subject } from 'rxjs';

@Component({ selector: `search-base`, template: '<div>Search Base Works!</div>'})
export abstract class SearchBase {
  public static Inputs = ['results'];
  public static Outputs = ['query', 'search'];

  public results: SearchResult[];
  public query = new Subject<string>();
  public search = new Subject<SearchResult>();

  public show = false;
  public value = '';

  public Search(v: SearchResult = null): void {
    // the result is selected from the queried results.
    if (v) {
      this.search.next(v);
      this.query.next(v.text);
      this.value = v.text;
      return;
    }
    // the result is created by user input.
    if (this.search) {
      // return an id of -1 to show it was user entered
      const result = new SearchResult(-1, null, this.value);
      this.search.next(result);
    }
  }

  public Query(v: string): void {
    this.value = v;
    if (!this.search) {
      this.results = [];
      return;
    } else {
      this.query.next(this.value);
    }
  }

  public Remove(i: number): void {
    this.results.splice(i, 1);
  }
}
