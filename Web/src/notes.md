# Material Design and Angular

___

![logo](https://www.carbonrider.com/wp-content/uploads/2018/05/angular-material.png)

## Table Of Contents
<!-- TOC -->

- [Material Design and Angular](#material-design-and-angular)
  - [Table Of Contents](#table-of-contents)
  - [Application](#application)
    - [File Structure *](#file-structure-)
    - [SASS Structure *](#sass-structure-)
    - [Modules](#modules)
    - [Pages](#pages)
    - [Routing](#routing)
  - [Layout](#layout)
    - [Header w/ Material Toolbar](#header-w-material-toolbar)
    - [Material Navbar](#material-navbar)
    - [Layout Fixed Styling](#layout-fixed-styling)
  - [Forms *](#forms-)
    - [FormBuilder *](#formbuilder-)
      - [Building your Form](#building-your-form)
      - [Validators for your form](#validators-for-your-form)
        - [Custom Validators](#custom-validators)
        - [Regex Cheat Sheet](#regex-cheat-sheet)
    - [Form HTML *](#form-html-)
    - [Accessing Form Controls *](#accessing-form-controls-)
    - [Accessing Form Values *](#accessing-form-values-)
    - [Submitting on Valid *](#submitting-on-valid-)
    - [Submitting Forms w/ ngSubmit()](#submitting-forms-w-ngsubmit)
      - [Validating your Form](#validating-your-form)
      - [Create Your Model](#create-your-model)
      - [Return completion as Observable](#return-completion-as-observable)
  - [Material Inputs](#material-inputs)
    - [Material Form Field (Label, Input, Hint, Error, Clear, Appearance)](#material-form-field-label-input-hint-error-clear-appearance)
      - [Label](#label)
      - [Input](#input)
      - [Hint](#hint)
      - [Error](#error)
      - [Clear & Hide/Unhide](#clear--hideunhide)
      - [Changing Appearance](#changing-appearance)
    - [Material and Standard Attributes](#material-and-standard-attributes)
    - [Types of Material Inputs](#types-of-material-inputs)
  - [SnackBar](#snackbar)
    - [Calling the SnackBar](#calling-the-snackbar)
    - [User Dismissing the SnackBar](#user-dismissing-the-snackbar)
    - [Injecting SnackBar Duration](#injecting-snackbar-duration)

<!-- /TOC -->
___

## Application

This application uses specific structure and patterns in order to develop code most effectively.

### File Structure *

The file structure uses the default Angular project, with some specific additions.

Folder|Purpose
-|-
Core | Shared Components, Modules, and Models.
Forms | Application Forms.
Validators | Form Validators and RegEx for application input.
Layout | Creates the Header, Nav-Bar, and Main Content.
Pages | Navigationable views of the application.

>Import each Pagesrouting modules to add it to your app e.g. /Admin, /Main, /Configure, /Export etc.

Keeping the folders seperate creates a separation of concern for other parts of th applications.

### SASS Structure *

Create most changes in the main `styles.sass` file.

>Use powerful SASS selectors for the most optimal changes.

Keep variables that have major effect on the application. 
>e.g. `$header-height`, `$nav-width`, and `$background-color`

### Modules

Shared Module looks like

Material Module looks like

### Pages

### Routing

## Layout

### Header w/ Material Toolbar

### Material Navbar

### Layout Fixed Styling

## Forms *

Make sure the `FormModule` is imported.
> Do not use the `FormModule` in the `SharedModule`.
> Only the Forms folder should make use of this module.

In your app's Forms folder:

    import { FormModule } from '@angular/forms'

    @NgModule({
      import: [FormModule]
    })
    export class FormsModule { }

### FormBuilder *

Import `FormBuilder` from `@angular/forms`

    import { FormBuilder } from @angular/forms

Inject the `FormBuilder` into your form class

    constructor(private formBuilder: FormBuilder) { }

Use the `FormBuilder` class to create your `FormGroup`

    public ngOnInit() {
      this.Form = this.formBuilder.Group({
        field: ['initial value', Validators.required ],
        ...,
      });
    }

#### Building your Form

#### Validators for your form

Import `Validators` from `@angular/forms`

    import { Validators } from @angular/forms

##### Custom Validators

##### Regex Cheat Sheet

### Form HTML *

If we have a Form component with this initialized formGroup.

    public ngOnInit() {
      this.Form = this.formBuilder.Group({
        email: ['', [Validators.required]]
      });
    }

    public Submit(): Obserable<User> {
      /** Do Something **/
    }

You can add it to your HTML with the `[formGroup]` angular attribute and the `(ngSubmit)` emitter.

    <form [formGroup]="Form" (ngSubmit)="Submit()"></form>

Create a button for form submission

    <button type="submit" mat-raised-button>Submit<button>

### Accessing Form Controls *

To access form values in **HTML**, use the `Form.control` member.

Any Validator has an error.

> Form.control.email.invalid

A specific Validator has an error

> Form.control.email.hasError('required')

Example Code in HTML

    <mat-error *ngIf="Form.control.email.hasError('required')">
      Email is <strong>required<strong/>
    </mat-error>

### Accessing Form Values *

To access form values in **HTML**, use the `Form.value` member.

    <input matInput [(ngModel)]="Form.value.email" type="email" formControlName="email" />
    <button mat-button *ngIf="Form.value.email" (click)="Form.value.email = ''" mat-icon-button matSuffix>
      <mat-icon>close</mat-icon>
    </button>

### Submitting on Valid *

Use the `[disable]` angular attribute to disable submission until the form is valid.

    [disable]="!Form.Valid"

### Submitting Forms w/ ngSubmit()

When the form is submitted, check if the form is valid

TODO -> this.Form.IsValid?

Grab the values from the form, and create the model you wish to create.
You can either pass back the observable model to the parent component, or call an observable service action.

#### Validating your Form

!this.Form.Valid

#### Create Your Model

    public OnSubmit(): Observable<boolean> {
      const model = new User();
      model.firstName = this.Form.value.firstName;
      model.lastName = this.Form.value.lastName;
      model.email = this.Form.value.email;
      model.password = this.Form.value.password;
      ////
    }

#### Return completion as Observable

    public OnSubmit() {
      if (!this.Form.Valid) {
        return of(false);
      }

      ////
      return of(true);
    }

## Material Inputs

Material offers components to help stylize and manage inputs.

### Material Form Field (Label, Input, Hint, Error, Clear, Appearance)

A `mat-form-field` is for stylizing input elements. It creates a box with a label, placeholer, error display, mat-hint, prefix & suffix, and theming. Decorate the input with a `formControlName` attribute in order to connect the values to the Form. 

All `mat-form-field` inputs must be a material design input

    <mat-select formControlName="color">
      <mat-option value="primary">Primary</mat-option>
      <mat-option value="accent">Accent</mat-option>
      <mat-option value="warning">Warning</mat-option>
    </mat-select>

If the input is not a material input, decorate it with the `matInput` attribute

    <input [(ngModel)]="Form.value.email" matInput formControlName="email" type="email" rqeuired />

___

![logo](/src/assets/mat_form_field.png)

#### Label

#### Input

#### Hint

#### Error

#### Clear & Hide/Unhide

#### Changing Appearance

### Material and Standard Attributes

### Types of Material Inputs

## SnackBar

### Calling the SnackBar

### User Dismissing the SnackBar

### Injecting SnackBar Duration
