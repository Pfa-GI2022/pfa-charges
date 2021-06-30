import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'userFilter',
})
export class UserFilterPipe implements PipeTransform {
  transform(Users: User[], term?: string): User[] {
    if (!Users || !term) return Users;
    else {
      if (term === 'Admin') {
        return Users.filter((U) => U.Roles === 'admin');
      } else if (term === 'Professeur')
        return Users.filter((U) => U.Roles === 'professeur');
      else if (term === 'Chef De Departement')
        return Users.filter((U) => U.Roles === 'chefDeDepartement');
      else if (term === 'Chef De Filiere')
        return Users.filter((U) => U.Roles === 'chefDeFiliere');
      else return Users;
    }
  }
}
