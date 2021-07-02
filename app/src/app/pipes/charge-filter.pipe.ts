import { Pipe, PipeTransform } from '@angular/core';
import { Professeur } from '../models/professeur.model';

@Pipe({
  name: 'chargeFilter',
})
export class ChargeFilterPipe implements PipeTransform {
  transform(professeurs: Professeur[], term?: string): Professeur[] {
    if (!professeurs || !term) return professeurs;
    else {
      if (term === 'charge atteinte') {
        return professeurs.filter((p) => p.charge.chargeTotal >= 180);
      } else if (term === 'charge presque atteinte')
        return professeurs.filter(
          (p) => p.charge.chargeTotal < 180 && p.charge.chargeTotal >= 120
        );
      else if (term === 'charge non atteinte')
        return professeurs.filter((p) => p.charge.chargeTotal < 120);
      else return professeurs;
    }
  }
}
