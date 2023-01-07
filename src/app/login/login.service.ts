import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  sendGoogleToken(token: string): Observable<any> {
    let obj = { token: token };

    return this.http.post(environment.apiUrl + "auth/google", obj);
  }
}
