import { Observable } from 'rxjs';
import { DialogBase } from './dialog.base';

export abstract class ModelDialogBase<ComponentT, ModelT> extends DialogBase<ComponentT> {
  public Open(model: ModelT = null): Observable<ModelT> {
    this.InitConfig(model);
    return super.Open();
  }

  private InitConfig(model: ModelT) {
    if (!this.config) {
      this.config = {
        data: model
      };
    } else {
      this.config.data = model;
    }
  }
}
