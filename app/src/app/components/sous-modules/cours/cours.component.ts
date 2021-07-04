import { Component, OnInit ,Input} from '@angular/core';
import { MatiereService } from '../../../services/matiere.service';
import { Matiere } from "../../../models/matiere.model";
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { activitePedagogiques } from 'src/app/models/activite.model';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})

export class CoursComponent implements OnInit {

  moduleID: number;
  matiereID:number;
  matiere : Matiere;
  activite : activitePedagogiques;
  Route = '';

  constructor(private route: ActivatedRoute, private matiereService: MatiereService, private activiteService : ActiviteService) {
    this.route.parent.params.subscribe(params => {
      this.matiereID = params.id2;
      this.matiereService.getMatiereByID(params.id2).subscribe(data => {
        this.matiere = data;
        this.matiere.activitePedagogiques.forEach(m => {
          this.activiteService.getActivityByID(m.id).subscribe(data => {
            if( m.nature == "cours"){
              this.activite= data;
            }
          });
        });
      });
    });
    this.route.parent.parent.parent.params.subscribe(params => {
      this.moduleID = params.id
    })

    this.Route = `/departement/modules/${this.moduleID}/sousModules/${this.matiereID}/cours`
}

  ngOnInit(): void {
  }
 
}
