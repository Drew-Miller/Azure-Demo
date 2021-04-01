import { Directive,  EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Directive()
export abstract class ModelBaseComponent<T> implements OnChanges {
  public static Inputs = ['model'];
  public static Outputs = ['modelChange'];

  public model: T;
  public modelChange: EventEmitter<T> = new EventEmitter();

  /**
   * Triggers a model update and emits the value.
   * @param val New value for the model.
   */
  public ModelChange(val: T) {
    this.modelChange.emit(this.model = val);
  }

  /**
   * Used to update the model.
   * @param changes Input change values
   */
  public ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (ModelBaseComponent.Inputs.indexOf(propName) > -1) {
        const val = changes[propName].currentValue as T;
        this.model = val;
      }
    }
  }
}
