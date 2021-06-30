import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Filiere} from '../models/filiere.model'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http: HttpClient) { }

  getFiliereById(id: number){
    const host = environment.host;
    return this.http.get(`${host}/filieres/${id}`);
  }
  getAllFilieres(): Observable<Filiere[]> {
    const host = environment.host;
    return this.http.get<Filiere[]>(`${host}/filieres`);
  }
  deleteFiliereid(id: number) {
    const host = environment.host;
    return this.http.delete(`${host}/filieres/${id}`);
  }

  createFiliere(body:Filiere) {
    const host = environment.host;
    console.log('create filiere')
    return this.http.post(`${host}/filieres`, body);

  }
}
