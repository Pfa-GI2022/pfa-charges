import { Pipe, PipeTransform } from '@angular/core';
import { Filiere } from '../models/filiere.model';

@Pipe({
  name: 'filiereFilterModules'
})
export class FiliereFilterModulesPipe implements PipeTransform {

  transform(filieres : Filiere[], term?: string): Filiere[] {
    if(!filieres || !term )
      return filieres

    return filieres.filter((f) => f.nom.toLowerCase().includes(term.toLowerCase()))
}

}
