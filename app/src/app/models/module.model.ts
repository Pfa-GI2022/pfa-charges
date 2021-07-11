import { Matiere } from "./matiere.model";
export interface Module {
  nom: string;
  semestre: string;
  filiere?: any;
  departement?: any;
  matieres?: Matiere[]
}
