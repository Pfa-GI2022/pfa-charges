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
        return Users.filter((U) => {
          for (let i = 0; i < U.roles.length; i++) {
            return U.roles[i].name === 'admin';
          }
        });
      } else if (term === 'Professeur')
        return Users.filter((U) => {
          for (let i = 0; i < U.roles.length; i++) {
            return U.roles[i].name === 'professeur';
          }
        });
      else if (term === 'Chef De Departement')
        return Users.filter((U) => {
          for (let i = 0; i < U.roles.length; i++) {
            return U.roles[i].name === 'chefDeDepartement';
          }
        });
      else if (term === 'Chef De Filiere')
        return Users.filter((U) => {
          for (let i = 0; i < U.roles.length; i++) {
            return U.roles[i].name === 'chefDeFiliere';
          }
        });
      else return Users;
    }
  }
}
