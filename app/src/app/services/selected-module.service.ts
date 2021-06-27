import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedModuleService {

  private message = new BehaviorSubject('First Message');
  private departement = new BehaviorSubject<Departement>(null);

  currentDeparetement = this.departement.asObservable();
  sharedMessage = this.message.asObservable(); 

  constructor() { }

  nextMessage(message: string) {
    this.message.next(message)
  }

  setDepartement(departement: any){
    this.departement.next(departement);
  }

}
