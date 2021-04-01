import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export abstract class DialogBase<ComponentT> {
  constructor(
      protected component: ComponentType<ComponentT>,
      protected dialog: MatDialog,
      protected config: MatDialogConfig = null) { }

  public Open(): Observable<any> {
    const dialogRef = this.dialog.open(this.component, this.config);
    return dialogRef.afterClosed();
  }
}
