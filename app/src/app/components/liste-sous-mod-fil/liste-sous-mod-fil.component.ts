import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/services/module.service';
import { MatiereService } from 'src/app/services/matiere.service';
import { Matiere } from 'src/app/models/Matiere.model';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-liste-sous-mod-fil',
  templateUrl: './liste-sous-mod-fil.component.html',
  styleUrls: ['./liste-sous-mod-fil.component.css'],
})
export class ListeSousModFilComponent implements OnInit {
  matieres = [];
  module: Module;
  listeSousModuleVisibility = true;
  currentUrl = '';
  hide = false;
  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private matiereService: MatiereService,
    private calculeCharge: CalculeChargeService,
    private Location: Location,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.moduleService.getModuleByID(params.id).subscribe((data) => {
        this.module = data;
        this.module.matieres.forEach((m) => {
          this.matiereService.getMatiereByID(m.id).subscribe((data) => {
            this.matieres.push(data);
          });
        });
      });
    });

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl =
          this.Location.path().split('/')[
            this.Location.path().split('/').length - 1
          ];
        this.hide = 'newSousModule' == this.currentUrl;
      }
    });
  }

  onGetMatiereById(id: number) {
    this.matiereService
      .getMatiereByID(id)
      .subscribe((data) => console.log(data));
  }

  calculeVH(matiere: Matiere) {
    return this.calculeCharge.getVHMatiere(matiere);
  }

  ngOnInit(): void {}

  toggleVisivility() {
    this.listeSousModuleVisibility = !this.listeSousModuleVisibility;
  }
}
