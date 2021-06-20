import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    const host = environment.host;
    return this.http.post(`http://localhost:3000/api/auth/signin`, {
      username: credentials.username,
      password: credentials.password
    },httpOptions);
  }

  register(user): Observable<any> {
    const host = environment.host;

    return this.http.post(`${host}/api/auth/signup`, {
      username: user.username,
      email: user.email,
      password: user.password
    },httpOptions);
  }
}
