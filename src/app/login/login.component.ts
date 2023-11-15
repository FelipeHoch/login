import { Component, OnInit } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { ClrLoadingState } from '@clr/angular';
import { AuthService, FormFieldErrorMsgService, LoginData, LoginForm } from '../core';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Icons
  faGoogle = faGoogle;
  faMicrosoft = faMicrosoft;

  error: null | string = null;

  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  redirect = this.route.snapshot.queryParamMap.get("redirect") || "";

  isLoadingGoogle = false;

  loginForm = this.fb.group<LoginForm>({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private errorMessageService: FormFieldErrorMsgService,
    private authGoogleService: SocialAuthService,
    private loginService: LoginService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authGoogleService.authState.subscribe((user) => {
      this.isLoadingGoogle = true;

      this.loginService.sendGoogleToken(user.idToken).subscribe({
        next: res => {
          this.authService.signIn(res, this.redirect);

          this.isLoadingGoogle = false;
        },
        error: error => {
          this.isLoadingGoogle = false;

          this.error = "Email não encontrado";
        }
      });
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return null;

    this.submitBtnState = ClrLoadingState.LOADING;

    let loginData: LoginData = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    };

    this.sendCredentials(loginData);

    return;
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

  private sendCredentials(loginData: LoginData) {
    this.loginService.sendCredentials(loginData).subscribe({
      next: user => this.authService.signIn(user, this.redirect),
      error: err => {
        this.submitBtnState = ClrLoadingState.ERROR;

        this.error = "Usuário ou senha inválidos";
      }
    })
  }
}
