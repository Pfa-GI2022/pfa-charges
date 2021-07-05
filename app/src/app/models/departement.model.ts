import {Professeur} from '../models/professeur.model';
import { Module } from './module.model';
export interface Departement {
    id?: number,
    nom: string,
    chefDepartementID?:number,
    professeur?:Professeur,
    Professeurs?: Professeur[],
    modules?: Module[],
}
  