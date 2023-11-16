import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginData } from '../core';
import { user } from '../core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(
    private http: HttpClient
  ) { }

  sendCredentials(loginData: LoginData): Observable<user> {
    return this.http.post<user>(environment.apiUrl + "auth", loginData);
  }

  sendGoogleToken(token: string): Observable<user> {
    let obj = { token: token };

    return this.http.post<user>(environment.apiUrl + "auth/google", obj);
  }
}
