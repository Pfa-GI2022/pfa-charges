import { Injectable } from '@angular/core';
import { Matiere } from "../models/matiere.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) {

  }
  getAllMatieres(): Observable<Matiere[]> {
    const host = environment.host;
    return this.http.get<Matiere[]>(`${host}/matieres`);
  }
  getMatiereByID(id: number): Observable<Matiere> {
    const host = environment.host;
    return this.http.get<Matiere>(`${host}/matieres/ ${id}`);
  }

  deleteMatiereid(id: number) {
    const host = environment.host;
    return this.http.delete(`${host}/matieres/${id}`);
  }

  createMatiere(body: Matiere) {
    const host = environment.host;
    console.log('create matiere')
    return this.http.post(`${host}/matieres`, body);

  }
}
