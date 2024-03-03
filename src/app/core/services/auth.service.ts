import { Injectable } from '@angular/core';
import { user } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(user: user, redirect: string): void {
    let userInBase64 =  window.btoa(JSON.stringify(user));

    const base64UrlEncoded = encodeURIComponent(userInBase64);

    window.location.href = redirect + base64UrlEncoded;
  }
}
