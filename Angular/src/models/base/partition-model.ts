import { ModelBase } from './model-base';

export abstract class PartitionModel extends ModelBase {
  public abstract Partition(): string;
}
