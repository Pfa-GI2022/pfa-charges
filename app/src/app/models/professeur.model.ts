import { activitePedagogiques } from './activite.model';
import { Departement } from './departement.model';
import { User } from './user.model';
export interface Professeur {
  id?: number;
  nom: string;
  prenom: string;
  avatar?: string;
  dateNaissance?: Date;
  grade?: string;
  filiere?: any;
  charge?: any;
  email?: string;
  depID?: number;
  filID?: number;
  departement?: Departement;
  activitePedagogiques?: activitePedagogiques[];
  account?: User;
}
