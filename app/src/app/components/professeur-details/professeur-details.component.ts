import { Component, OnInit, Input } from '@angular/core';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { Professeur } from 'src/app/models/professeur.model';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-professeur-details',
  templateUrl: './professeur-details.component.html',
  styleUrls: ['./professeur-details.component.css']
})
export class ProfesseurDetailsComponent implements OnInit {
  @Input() professeur;
  constructor(private professeurService: ProfesseurService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onGetProfById(id: number) {
    this.professeurService.getProfesseurByID(id).subscribe((data) => {
      console.log(data);
      this.professeur = data;
      console.log(this.professeur.nom);
    });
  }
}
