import { Component, OnInit } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { ClrLoadingState } from '@clr/angular';
import { FormFieldErrorMsgService, LoginData, LoginForm } from '../core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Icons
  faGoogle = faGoogle;
  faMicrosoft = faMicrosoft;

  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  loginForm = this.fb.group<LoginForm>({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private errorMessageService: FormFieldErrorMsgService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;

    // Just for test loading 
    setTimeout(() => { this.submitBtnState = ClrLoadingState.DEFAULT }, 2000);

    if (this.loginForm.invalid) return null;

    let loginData: LoginData = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    };

    return loginData;
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
