import { Pipe, PipeTransform } from '@angular/core';
import { Module } from '../models/module.model';
@Pipe({
  name: 'searchFilterModules'
})
export class SearchFilterModulesPipe implements PipeTransform {

  transform(modules : Module[], term?: string): Module[] {
    if(!modules || !term )
      return modules

    return modules.filter((m) => m.nom.toLowerCase().includes(term.toLowerCase()))
}


}
