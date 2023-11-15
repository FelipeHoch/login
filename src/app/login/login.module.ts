import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SocialLoginModule,
    GoogleSigninButtonModule 
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "166598508396-d7d41dbjmsclm2h4qbga90hm3do5hebb.apps.googleusercontent.com"
            )
          }
        ],
        onError: (err: Error) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }
  ]
})
export class LoginModule { }
