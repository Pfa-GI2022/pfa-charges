import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/services/module.service';
import { MatiereService } from 'src/app/services/matiere.service';
import { Matiere } from 'src/app/models/Matiere.model';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';

@Component({
  selector: 'app-liste-sous-modules',
  templateUrl: './liste-sous-modules.component.html',
  styleUrls: ['./liste-sous-modules.component.css']
})
export class ListeSousModulesComponent implements OnInit {
  matieres=[];
  module: Module;
  constructor(private route: ActivatedRoute, private moduleService: ModuleService, private matiereService: MatiereService,private calculeCharge:CalculeChargeService) {
    this.route.params.subscribe(params => {
      this.moduleService.getModuleByID(params.id).subscribe(data => {
        this.module = data;
        this.module.matieres.forEach(m => {
          this.matiereService.getMatiereByID(m.id).subscribe(data => {
            this.matieres.push(data);
            console.log(this)
            console.log(this.matieres)});
        }); 
      });
    });
    console.log(this.matieres)

  }

  onGetMatiereById(id: number) {
    this.matiereService.getMatiereByID(id).subscribe(data => console.log(data));
  }
  
  calculeVH(matiere:Matiere){
    return this.calculeCharge.getVHMatiere(matiere)
  }

  ngOnInit(): void {
  }

}
