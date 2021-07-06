import { Professeur } from './professeur.model';

export interface User {
  id?:number;
  username: string;
  email: string;
  password: string;
  roles?: any;
  accountOwner?: Professeur;
}
