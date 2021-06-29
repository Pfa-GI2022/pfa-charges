import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private departement = new BehaviorSubject<Departement>(null);

  currentDeparetement = this.departement.asObservable();

  constructor() { }

  setDepartement(departement: any){
    this.departement.next(departement);
  }
}
