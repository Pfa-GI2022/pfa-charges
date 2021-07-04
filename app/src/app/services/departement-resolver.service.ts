import { Injectable } from '@angular/core';
import { Resolve ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement.model';
import { DepartementService } from './departement.service';
import { TokenStorageService } from './token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class DepartementResolverService implements Resolve<Departement>{

  depID: number;
  constructor(private departementService:DepartementService,private tokenStorage:TokenStorageService) { 
    if(this.tokenStorage.getUser()){
      this.depID = this.tokenStorage.getUser().accountOwner.depID;
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
      return this.departementService.getDepByID(this.depID);
  }

}
