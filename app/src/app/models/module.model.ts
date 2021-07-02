import { Filiere } from './filiere.model';
export interface Module {
  nom: string;
  semestre: string;
  matieres?: any;
  filiere?: any;
  departement?: any;
}
