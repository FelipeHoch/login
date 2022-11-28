import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { AuthService } from './services';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SocialLoginModule
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
              'add client id Here'
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
export class CoreModule { }
