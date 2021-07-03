import { ActiviteComponent } from "../components/activite/activite.component";
import { Departement } from "./departement.model";
import { activitePedagogiques } from "./activite.model";

export interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  avatar?: string;
  dateNaissance?: Date;
  grade: string;
  filiere?: any;
  activitePedagogiques?: activitePedagogiques;
  charge?: any;
  mail?: string;
  depID?:number;
  filID?:number;
  departement?: Departement
}
