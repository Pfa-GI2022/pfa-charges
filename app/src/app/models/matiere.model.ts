import { activitePedagogiques } from './activite.model';
export interface Matiere {
  nom: string;
  modulId?: number;
  module?: any;
  activitePedagogiques?: activitePedagogiques[];
}
