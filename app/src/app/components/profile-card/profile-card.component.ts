import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from '../../models/professeur.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  Prof: Professeur;
  constructor(private professeurService: ProfesseurService) {}

  ngOnInit(): void {
    this.onGetProfById(1);
  }

  onGetProfById(id: number) {
    this.professeurService
      .getProfesseurByID(id)
      .subscribe((data) => (this.Prof = data));
  }
}
