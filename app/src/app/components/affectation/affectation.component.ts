import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { Professeur } from 'src/app/models/professeur.model';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';
@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css'],
})
export class AffectationComponent implements OnInit {
  professeurs: Professeur[];
  activiteID: number;
  constructor(
    private route: ActivatedRoute,
    private activiteService: ActiviteService,
    private professeurService: ProfesseurService,
    private calculeChargeService: CalculeChargeService
  ) {
    this.route.params.subscribe((params) => {
      this.activiteID = params.id3;
    });
  }

  ngOnInit(): void {
    this.onGetAllProfs();
  }

  onGetAllProfs(): void {
    this.professeurService.getAllProfesseurs().subscribe((data) => {
      this.professeurs = data;
    });
  }

  onClick(prof: Professeur) {
    this.activiteService
      .updateActivity({ professeurID: prof.id }, this.activiteID)
      .subscribe((response) => {
        // setTimeout(() => {
        //   this.calculeChargeService.SetChargeProf(prof)
        // }, 500);
      });
  }
}
