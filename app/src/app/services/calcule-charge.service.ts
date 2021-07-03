import { Injectable } from '@angular/core';
import { Module } from '../models/module.model';
import { Matiere } from '../models/Matiere.model';

@Injectable({
  providedIn: 'root'
})
export class CalculeChargeService {

  constructor() { }

  
  //caclule du volume horaire d'une matiere
  getVHMatiere(matiere:Matiere){
    let VH = {
      cours : 0,
      tp : 0,
      td : 0,
      total : 0
    };

    matiere.activitePedagogiques.forEach( activite  => {
      if(activite.nature == 'cours'){
        if(VH.cours == 0){
          VH.cours = activite.volumeHoraire
        }
      }

      if(activite.nature == 'tp'){
        if(VH.tp == 0){
          VH.tp = activite.volumeHoraire
        }
      }

      if(activite.nature == 'td'){
        if(VH.td == 0){
          VH.td = activite.volumeHoraire
        }
      }
    });
    VH.total = VH.cours + VH.td + VH.tp;
    return VH
  }

  getVHModule(){

  }


}
