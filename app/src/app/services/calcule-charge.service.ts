import { Injectable } from '@angular/core';
import { Professeur } from '../models/professeur.model';
import { Module } from '../models/module.model';
import { Matiere } from '../models/Matiere.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ChargeService } from './charge.service';

@Injectable({
  providedIn: 'root',
})
export class CalculeChargeService {
  constructor(private http: HttpClient, private ChargeService: ChargeService) {}

  //caclule du volume horaire d'une matiere
  getVHMatiere(matiere: Matiere) {
    let VH = {
      cours: 0,
      tp: 0,
      td: 0,
      total: 0,
    };

    matiere.activitePedagogiques.forEach((activite) => {
      if (activite.nature == 'cours') {
        if (VH.cours == 0) {
          VH.cours = activite.volumeHoraire;
        }
      }

      if (activite.nature == 'tp') {
        if (VH.tp == 0) {
          VH.tp = activite.volumeHoraire;
        }
      }

      if (activite.nature == 'td') {
        if (VH.td == 0) {
          VH.td = activite.volumeHoraire;
        }
      }
    });
    VH.total = VH.cours + VH.td + VH.tp;
    return VH;
  }

  getVHModule() {}

  GetChargeProf(Prof: Professeur): number {
    let Charge = 0;
    Prof.activitePedagogiques.forEach((A) => {
    
      if (A.nature == 'cours') {
        Charge += 1.5 * A.volumeHoraire;
      }

      if (A.nature == 'td') {
        Charge += 1 * A.volumeHoraire;
      }

      if (A.nature == 'tp') {
        Charge += 0.75 * A.volumeHoraire;
      }
    });
    return Charge;
  }
  
  SetChargeProf(Prof: Professeur) {
    console.log(Prof,"charge ------>",this.GetChargeProf(Prof))
    return this.ChargeService.updateCharge(
      this.GetChargeProf(Prof),
      Prof.id
    ).subscribe();
  }
}
