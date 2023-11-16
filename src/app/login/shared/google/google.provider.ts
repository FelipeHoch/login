import { GoogleLoginProvider, SocialAuthServiceConfig } from "@abacritt/angularx-social-login";
import { EnvironmentProviders, Provider } from "@angular/core";
import { environment } from "src/environments/environment";

export const provideGoogleSocial = (): Array<Provider | EnvironmentProviders> => {
    return [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            environment.googleClientId
                        )
                    }
                ],
                onError: (err: Error) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig
        }
    ]
}