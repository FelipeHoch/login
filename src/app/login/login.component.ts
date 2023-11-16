import { GoogleSigninButtonModule, SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule, ClrLoadingState } from '@clr/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { AuthService, FormFieldErrorMsgService, LoginData, LoginForm } from '../core';
import { LoginService } from './login.service';
import { LoginApiService } from './login.api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, ClarityModule, SocialLoginModule, GoogleSigninButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Input() redirect: string = '/';

  // Icons
  faGoogle = faGoogle;
  faMicrosoft = faMicrosoft;

  error: null | string = null;

  submitBtnState = signal(ClrLoadingState.DEFAULT);

  isLoadingGoogle = signal(false);

  loginForm = this.loginService.createCredentialsForm();

  constructor(
    private errorMessageService: FormFieldErrorMsgService,
    private authGoogleService: SocialAuthService,
    private loginApiService: LoginApiService,
    private loginService: LoginService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authGoogleService.authState.subscribe((user) => {
      this.isLoadingGoogle.set(true);

      if (!user) return;

      this.sendGoogleToken(user.idToken);
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    this.submitBtnState.set(ClrLoadingState.LOADING);

    let loginData: LoginData = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    };

    this.sendCredentials(loginData);
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
    this.loginApiService.sendCredentials(loginData).subscribe({
      next: user => this.authService.signIn(user, this.redirect),
      error: err => {
        this.submitBtnState.set(ClrLoadingState.ERROR);

        this.error = "Usuário ou senha inválidos";
      }
    })
  }

  private sendGoogleToken(token: string) {
    this.loginApiService.sendGoogleToken(token).subscribe({
      next: res => {
        this.authService.signIn(res, this.redirect);

        this.isLoadingGoogle.set(false);
      },
      error: error => {
        this.isLoadingGoogle.set(false);

        this.error = "Email não encontrado";
      } 
    });
  }
}
