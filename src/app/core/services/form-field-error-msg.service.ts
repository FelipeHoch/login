import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { errorMessages } from '..';



@Injectable({
  providedIn: 'root'
})
export class FormFieldErrorMsgService {

  constructor() { }

  private handleValidationError(formField: AbstractControl): string {
    if (formField.hasError('required')) return errorMessages.required;

    if (formField.hasError('email')) return errorMessages.email;

    if (formField.hasError('minlength')) return errorMessages.minlength(formField.errors!['minlength'].requiredLength);

    return "Field with incorrect data";
  }

  getErrorMessage(formField: AbstractControl): string {
    return this.handleValidationError(formField);
  }
}
