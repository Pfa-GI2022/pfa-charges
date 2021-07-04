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
import { activitePedagogiques } from 'src/app/models/activite.model';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css'],
})
export class ProfDetailsComponent implements OnInit {
  @Input() professeur;
  matiere: Matiere;
  activite : activitePedagogiques;
    //groupe: Groupe;
  constructor(private route: ActivatedRoute, private matiereService: MatiereService, private activiteService: ActiviteService,private professeurService: ProfesseurService) {
    
/*
     this.matiereService.getMatiereByID(this.professeur.activitePedagogiques.matiereID).subscribe(data=>{
      this.matiere = data;
      console.log(data);

     });*/
    }
      
  ngOnInit(): void {
    // this.onGetProfById();
  }
  onGetProfById(id: number) {
    this.professeurService.getProfesseurByID(id).subscribe((data) => {
      console.log(data);
      this.professeur = data;
      console.log(this.professeur.grade);
    });
  }
}


