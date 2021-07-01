import { Component, Input, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/professeur.model';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-fil-card',
  templateUrl: './fil-card.component.html',
  styleUrls: ['./fil-card.component.css'],
})
export class FilCardComponent implements OnInit {
  @Input() Filiere;
  ChefFil: Professeur;
  constructor(private ProfService: ProfesseurService) {}

  ngOnInit(): void {
    this.onGetChefFil();
  }

  onGetChefFil(): void {
    this.ProfService.getProfesseurByID(this.Filiere.chefFiliereID).subscribe(
      (data) => {
        this.ChefFil = data;
      }
    );
  }
}
