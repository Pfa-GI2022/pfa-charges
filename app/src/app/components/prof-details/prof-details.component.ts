import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from '../../models/professeur.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css'],
})
export class ProfDetailsComponent implements OnInit {
  Prof: Professeur;
  constructor(private profService: ProfesseurService) {}

  ngOnInit(): void {
    this.onGetProfById(1);
  }

  // events
  onGetProfById(id: number) {
    this.profService.getProfesseurByID(id).subscribe((data) => {
      console.log(data);
      this.Prof = data;
      console.log(this.Prof.nom);
    });
  }
}
