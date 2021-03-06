import { SearchResult } from 'models/models.bundle';

export abstract class SearchConsumer {
  public results: SearchResult[];
  public abstract OnQuery(value: string);
  public abstract OnSearch(result: SearchResult);
}
