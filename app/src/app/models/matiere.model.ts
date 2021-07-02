import { activitePedagogiques } from "./activite.model";
export interface Matiere {
    nom: string,
    modulId?:number,
    module?: any,
<<<<<<< HEAD
    activitePedagogiques?: any
    
=======
    activitePedagogiques?: activitePedagogiques[]
>>>>>>> 87d15e6c854ed31b9457a671a19a5cbfd2854f21
}