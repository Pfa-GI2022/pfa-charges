import {Professeur} from '../models/professeur.model';
export interface Departement {
    id: number,
    nom: string,
    chefDepartementID?:number,
    Professeurs?: Professeur[],
}
  