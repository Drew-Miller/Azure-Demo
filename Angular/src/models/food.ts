import { PartitionModel } from './base/partition-model';

export class Food extends PartitionModel {
  public name: string;
  public foodGroup: string;

  public Partition(): string {
    return this.foodGroup;
  }
}
