import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private departement = new BehaviorSubject<Departement>(null);
  private filiere = new BehaviorSubject<Departement>(null);
  private professeur = new BehaviorSubject<Departement>(null);
  
  currentDeparetement = this.departement.asObservable();
  cuurentFiliere = this.filiere.asObservable();
  currentProfesseur = this.filiere.asObservable();
  
  constructor() { }

  setDepartement(departement: any){
    this.departement.next(departement);
  }

  setFiliere(filiere: any){
    this.filiere.next(filiere);
  }

  setProf(professeur : any){
    this.professeur.next(professeur)
  }
}
