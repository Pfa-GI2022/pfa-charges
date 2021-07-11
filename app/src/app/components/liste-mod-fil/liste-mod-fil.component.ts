import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/professeur.model';
import { FiliereService } from 'src/app/services/filiere.service';
import { Module } from 'src/app/models/module.model';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-liste-mod-fil',
  templateUrl: './liste-mod-fil.component.html',
  styleUrls: ['./liste-mod-fil.component.css'],
})
export class ListeModFilComponent implements OnInit {

  modules: Module[];
  
  term: string;

  constructor(
    private sharedService:SharedService
  ) {}

  ngOnInit(): void {
    this.onGetFilMod();
  }
  onGetFilMod() {
    this.sharedService.cuurentFiliere.subscribe(fil => {
      this.modules = fil.modules;
    })
  }

  estAffecte(module : Module){
    let affecte = true;
    console.log("-----------------------")
    for(let i=0;i<module.matieres.length;i++){
      for(let j=0;j<module.matieres[i].activitePedagogiques.length;j++){
        if(module.matieres[i].activitePedagogiques[j].professeurID == null)
          affecte = false
      }
    }
    return affecte;
  }

  onSearch(term: string): void {
    this.term = term;
  }
}
