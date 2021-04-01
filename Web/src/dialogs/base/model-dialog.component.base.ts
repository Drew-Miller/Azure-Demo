import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponentBase } from './dialog.component.base';

export abstract class ModelDialogComponentBase<ComponentT, ModelT> extends DialogComponentBase<ComponentT> {
  constructor(dialogRef: MatDialogRef<ComponentT>, public model: ModelT = null) {
    super(dialogRef);
    this.model = model ? model : this.DefaultModel();
  }

  public Close() {
    super.Close(this.model);
  }

  public Ok() {
    super.Ok(this.model);
  }

  protected abstract DefaultModel(): ModelT;
}
