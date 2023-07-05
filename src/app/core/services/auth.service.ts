import { Injectable } from '@angular/core';
import { user } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signIn(user: user, redirect: string): void {
    let userInBase64 =  window.btoa(JSON.stringify(user));

    window.location.href = redirect + userInBase64;
  }
}
