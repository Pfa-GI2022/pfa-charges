import { Injectable } from '@angular/core';
import { Professeur } from "../models/professeur.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  constructor(private http: HttpClient) { }

  getAllProfesseurs():Observable<Professeur[]>{
    const host = environment.host;
    return this.http.get<Professeur[]>(`${host}/professeurs`);
  }

  getProfesseurByID(id:number):Observable<Professeur>{
    const host = environment.host;
    return this.http.get<Professeur>(`${host}/professeurs/ ${id}`);
  }

  deleteProfesseur(id:number){
    const host = environment.host;
    return this.http.delete(`${host}/professeurs/${id}`);
  }
}
