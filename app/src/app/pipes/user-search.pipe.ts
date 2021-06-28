import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'userSearch',
})
export class UserSearchPipe implements PipeTransform {
  transform(Users: User[], term?: string): User[] {
    if (!Users || !term) return Users;

    return Users.filter((U) =>
      U.username.toLowerCase().includes(term.toLowerCase())
    );
  }
}
