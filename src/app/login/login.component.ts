import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FormFieldErrorMsgService } from './services/form-field-error-msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Icons
  faGoogle = faGoogle;
  faMicrosoft = faMicrosoft;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private errorMessageService: FormFieldErrorMsgService
  ) { }

  ngOnInit(): void {

  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  showErrorMsg(formField: AbstractControl): string {
    return this.errorMessageService.getErrorMessage(formField);
  }

}
