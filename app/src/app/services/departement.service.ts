import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root',
})
export class DepartementService {
  constructor(private http: HttpClient) {}

  getAllDeps(): Observable<Departement[]> {
    const host = environment.host;
    return this.http.get<Departement[]>(`${host}/departements`);
  }

  getDepByID(id: number) {
    const host = environment.host;
    return this.http.get(`${host}/departements/ ${id}`);
  }

  deleteDepartement(id: number) {
    const host = environment.host;
    return this.http.delete(`${host}/departements/${id}`);
  }

  createDepartement(body: Departement) {
    const host = environment.host;
    return this.http.post(`${host}/departements`, body);
  }
}
