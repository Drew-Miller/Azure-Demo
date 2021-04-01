import { Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export abstract class FormBaseComponent<T> implements OnInit {
  public static Inputs = ['model'];
  public static Outputs = ['saved'];
  public Form: FormGroup;
  public submitted = false;
  @Input() model: T;
  @Output() saved = new EventEmitter();

  public constructor(protected fb: FormBuilder) { }

  public ngOnInit() {
    this.Form = this.CreateForm();
  }

  /**
   * Submits the form and handles validation,
   * creating a model, and the observable events.
   */
  public Submit(): void {
    this.submitted = true;

    if (!this.Form.valid) {
      return;
    }

    this.model = this.CreateModel();

    this.OnSubmit().subscribe({
      next: (x) => {
        if (x) {
          this.saved.emit(this.model);
          this.Reset();
        }
      },
      error: (error) => this.Error(error),
      complete: () => this.Complete()
    });
  }

  /**
   * Uses the FormBuilder to create an appropriate FormGroup
   */
  protected abstract CreateForm(): FormGroup;

  /**
   * Returns a model populated from form input.
   */
  protected abstract CreateModel(): T;

  /**
   * Handles what happens on submission of the form.
   */
  protected abstract OnSubmit(): Observable<boolean>;

  /**
   * Gets called on submission error.
   * @param error Error to handle.
   */
  protected abstract Error(error: Error): void;

  /**
   * Gets called on submission complete.
   */
  protected abstract Complete(): void;

  /**
   * Resets the form.
   */
  protected abstract Reset(): void;
}
