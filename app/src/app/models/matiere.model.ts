import { activitePedagogiques } from './activite.model';
export interface Matiere {
  id?: number;
  nom?: string;
  modulID?: number;
  module?: any;
  activitePedagogiques?: activitePedagogiques[];
}
