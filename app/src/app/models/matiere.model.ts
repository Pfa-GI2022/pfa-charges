import { activitePedagogiques } from './activite.model';
export interface Matiere {
  id?: number;
  nom: string;
  modulId?: number;
  module?: any;
  activitePedagogiques?: activitePedagogiques[];
}
