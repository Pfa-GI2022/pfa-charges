import { Injectable } from '@angular/core';
import { Resolve ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Filiere } from '../models/filiere.model';
import { FiliereService } from './filiere.service';
import { TokenStorageService } from './token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class FiliereResolverService implements Resolve<Filiere>{

  filID: number;
  constructor(private filiereService:FiliereService,private tokenStorage:TokenStorageService) { 
    if(this.tokenStorage.getUser()){
      this.filID = this.tokenStorage.getUser().accountOwner.filiere.id;
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
      return this.filiereService.getFiliereById(this.filID);
  }

}
