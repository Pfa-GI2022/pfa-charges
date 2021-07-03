import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/professeur.model';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { Module } from 'src/app/models/module.model';
import { Filiere } from 'src/app/models/filiere.model';

@Component({
  selector: 'app-liste-mod-fil',
  templateUrl: './liste-mod-fil.component.html',
  styleUrls: ['./liste-mod-fil.component.css'],
})
export class ListeModFilComponent implements OnInit {
  Mod: Module[];
  Fil: any;
  Prof: Professeur;
  term: string;
  constructor(
    private CalcService: CalculeChargeService,
    private ProfService: ProfesseurService,
    private FilService: FiliereService
  ) {}

  ngOnInit(): void {
    this.onGetFilMod();
  }
  onGetFilMod() {
    this.FilService.getFiliereById(1).subscribe((data) => {
      this.Fil = data;
      this.Mod = this.Fil.modules;
      console.log(this.Mod);
    });
  }
  onSearch(term: string): void {
    this.term = term;
  }
}
