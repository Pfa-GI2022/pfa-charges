import { Injectable } from '@angular/core';
import { Professeur } from '../models/professeur.model';
import { Module } from '../models/module.model';
import { Matiere } from '../models/Matiere.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalculeChargeService {
  constructor(private http: HttpClient) {}

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
          VH.cours = activite.volumeHoraire;
        }
      }

      if (activite.nature == 'td') {
        if (VH.td == 0) {
          VH.cours = activite.volumeHoraire;
        }
      }
    });

    VH.total = VH.cours + VH.td + VH.tp;

    return VH;
  }

  getVHModule() {}
  SetChargeProf(Prof: Professeur) {
    let Charge = 0;
    Prof.activite.forEach((A) => {
      if (A.nature == 'cours') {
        Charge += 1.2 * A.volumeHoraire;
      }

      if (A.nature == 'tp') {
        Charge += 1 * A.volumeHoraire;
      }

      if (A.nature == 'td') {
        Charge += 0.8 * A.volumeHoraire;
      }
    });
    console.log(Charge);
    const host = environment.host;
    console.log('create prof');
    return this.http.put(`${host}/professeurs/${Prof.id}/charge`, {
      chargeTotal: Charge,
    });
  }
}
