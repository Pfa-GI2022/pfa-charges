import { Component, OnInit, Input } from '@angular/core';
import { MatiereService } from '../../../services/matiere.service';
import { Matiere } from "../../../models/matiere.model";
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { activitePedagogiques } from 'src/app/models/activite.model';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {

  moduleID: number;
  matiereID:number;
  matiere: Matiere;
  activite=[];
  Route = '';
  constructor(private route: ActivatedRoute, private matiereService: MatiereService, private activiteService: ActiviteService) {
    this.route.parent.params.subscribe(params => {
      console.log('------------------- matiere id', params.id2)
      this.matiereID = params.id2;
      this.matiereService.getMatiereByID(params.id2).subscribe(data => {
        this.matiere = data;
        console.log(data);
        this.matiere.activitePedagogiques.forEach(m => {
          this.activiteService.getActivityByID(m.id).subscribe(data => {
            if (m.nature == "td") {
              this.activite.push(data) ;
              console.log(data);
              console.log(this.activite.length);
            }
          });
        });
      });
    });

    this.route.parent.parent.parent.params.subscribe(params => {
      this.moduleID = params.id
    })

    this.Route = `/departement/modules/${this.moduleID}/sousModules/${this.matiereID}/td`
    
  }

  ngOnInit(): void {
  
  }

}

