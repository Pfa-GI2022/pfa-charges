import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    const host = environment.host;
    return this.http.get<User[]>(`${host}/api/admin/users`);
  }

  // getUserById(id: number): Observable<Professeur> {
  //   const host = environment.host;
  //   return this.http.get<Professeur>(`${host}/professeurs/${id}`);
  // }

  // deleteUser(id: number) {
  //   const host = environment.host;
  //   return this.http.delete(`${host}/professeurs/${id}`);
  // }

  createUser(body: User) {
    const host = environment.host;
    return this.http.post(`${host}/api/auth/signup`, body, {
      observe: 'response',
    });
  }
  updateUser(body: any, id: number) {
    const host = environment.host;
    return this.http.put(`${host}/api/admin/users/${id}`, body, {
      observe: 'response',
    });
  }
  verifyUser(body: any) {
    const host = environment.host;
    return this.http.put(`${host}/api/users/verify`, body, {
      observe: 'response',
    });
  }
}
