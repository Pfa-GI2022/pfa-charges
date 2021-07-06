import { Matiere } from "./matiere.model";

export interface activitePedagogiques {
    id?: number,
    nature: string,
    volumeHoraire: number,
    professeurID?: any,
    professeur?:any,
    matiereID?: any,
    groupeID? :any,
    matiere?: Matiere
    
}