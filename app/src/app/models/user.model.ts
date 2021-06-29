import { Professeur } from "./professeur.model";
export interface User {
  username: string;
  email: string;
  password: string;
  Roles: string[];
  accountOwner: Professeur
}
