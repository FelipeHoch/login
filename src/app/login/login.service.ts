import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  sendGoogleToken(token: string): Observable<user> {
    let obj = { token: token };

    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    return this.http.post<user>(environment.apiUrl + "auth/google", obj, { headers: headers });
  }
}
