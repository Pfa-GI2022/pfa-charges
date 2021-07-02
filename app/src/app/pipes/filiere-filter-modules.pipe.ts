import { Pipe, PipeTransform } from '@angular/core';
import { Filiere } from '../models/filiere.model';
import { Module } from '../models/module.model';
import { FiliereService } from '../services/filiere.service';

@Pipe({
  name: 'filiereFilterModules',
})
export class FiliereFilterModulesPipe implements PipeTransform {
  ListMod: Module[];
  transform(Modules: Module[], term?: string): Module[] {
    this.ListMod = [];
    if (!Modules || !term) return Modules;
    else if (term === 'all') return Modules;
    else {
      Modules.forEach((M) => {
        if (M.filiere.nom === term) this.ListMod.push(M);
      });
      return this.ListMod;

      // if (this.ListNomFil.includes(term))
      //   return Modules.filter((M) => M.filiere.nom === 'FilTest');
    }
  }
}
