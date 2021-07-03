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
  getV;
  SetChargeProf(Prof: Professeur) {
    let Charge = 0;
    console.log(Prof.activitePedagogiques);
    Prof.activitePedagogiques.forEach((A) => {
      if (A.nature == 'cours') {
        Charge += 3.2 * A.volumeHoraire;
        console.log(`Charge C: ${Charge}`);
      }

      if (A.nature == 'tp') {
        Charge += 1.8 * A.volumeHoraire;
        console.log(`Charge TD: ${Charge}`);
      }

      if (A.nature == 'td') {
        Charge += 0.8 * A.volumeHoraire;
        console.log(`Charge TP: ${Charge}`);
      }
    });
    console.log(Charge);
    console.log(Prof.id);
    const host = environment.host;
    console.log('Add Charge');
    return this.ChargeService.updateCharge(Charge, Prof.id).subscribe();
  }
}
