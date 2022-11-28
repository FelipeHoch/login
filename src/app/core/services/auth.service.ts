import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _googleClientId = "";

  constructor(private http: HttpClient) { }

  getClientId(): Observable<string> {
    return this.http.get<string>(environment.apiUrl + "auth/google-key");
  }

  get googleClientId(): string {
    return this._googleClientId;
  }

  set googleClientId(id: string) {
    this._googleClientId = id;
  }
}
