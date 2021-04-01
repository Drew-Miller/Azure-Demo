import { MatDialogRef } from '@angular/material/dialog';

export abstract class DialogComponentBase<ComponentT> {
  constructor(protected dialogRef: MatDialogRef<ComponentT>) { }

  public Close(v: any = false) {
    this.OnClose();
    this.dialogRef.close(v);
  }

  public Ok(v: any = true) {
    this.OnOk();
    this.dialogRef.close(v);
  }

  protected abstract OnClose(): void;
  protected abstract OnOk(): void;
}
