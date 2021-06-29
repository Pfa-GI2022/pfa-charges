import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Matiere } from 'src/app/models/Matiere.model';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'app-sous-modules',
  templateUrl: './sous-modules.component.html',
  styleUrls: ['./sous-modules.component.css']
})
export class SousModulesComponent implements OnInit {

  matiere: Matiere;
  constructor(private route: ActivatedRoute, private matiereService: MatiereService) {
    this.route.params.subscribe(params => {
      this.matiereService.getMatiereByID(params.id2).subscribe(data => {
        this.matiere = data;
        console.log(data);
      });
    });
  }
  ngOnInit(): void {
    
  }

}
