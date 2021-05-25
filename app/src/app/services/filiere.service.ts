import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http: HttpClient) { }

  getFiliereById(id: number){
    const host = environment.host;
    return this.http.get(`${host}/filieres/${id}`);
  }
}
