import { Departement } from "./departement.model";
export interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  avatar?: string;
  dateNaissance?: Date;
  grade: string;
  filiere?: any;
  charge?: any;
  mail?: string;
  depID?:number;
  filID?:number;
  departement?: Departement
}
