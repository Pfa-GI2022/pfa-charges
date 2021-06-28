import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  roles = [];

  constructor(private tokenStorage: TokenStorageService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const expectedRole = route.data.expectedRole;
      if(this.tokenStorage.getUser())
        this.roles = this.tokenStorage.getUser().roles;

      if (
        !this.tokenStorage.getToken() || !this.roles.includes(expectedRole) 
      ) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  
}
