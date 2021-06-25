import { Pipe, PipeTransform } from '@angular/core';
import { Professeur } from '../models/professeur.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(professeurs : Professeur[], term?: string): Professeur[] {
    if(!professeurs || !term )
      return professeurs

    return professeurs.filter((p) => p.nom.toLowerCase().includes(term.toLowerCase()))
}


}
