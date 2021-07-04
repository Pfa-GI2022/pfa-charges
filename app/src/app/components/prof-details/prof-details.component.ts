import { Component, OnInit, Input } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { MatiereService } from '../../services/matiere.service';
import { Professeur } from '../../models/professeur.model';
import { Matiere } from "../../models/matiere.model";
//import { Groupe } from "../../models/groupe.model";
import { AuthService } from 'src/app/services/auth.service';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { GroupedObservable } from 'rxjs';
import { numberFormat } from 'highcharts';
import { activitePedagogiques } from 'src/app/models/activite.model';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css'],
})
export class ProfDetailsComponent implements OnInit {
  professeur : Professeur;
  activites : activitePedagogiques[];

  constructor(private route: ActivatedRoute, private matiereService: MatiereService, private activiteService: ActiviteService,private professeurService: ProfesseurService) {
    }
      
  ngOnInit(): void {
    this.onGetProfById();    
  }

  onGetProfById() {
    
    this.route.params.subscribe(params => {
      this.professeurService.getProfesseurByID(params.id).subscribe((prof) => {
        this.professeur = prof;
        this.activites = this.professeur.activitePedagogiques.sort((a, b) => (a.matiere.nom > b.matiere.nom) ? 1 : -1)

      })

      });
    
    
  }

}


