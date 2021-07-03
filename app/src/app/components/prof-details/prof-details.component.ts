import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from '../../models/professeur.model';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css'],
})
export class ProfDetailsComponent implements OnInit {
  Prof: Professeur;
  constructor(
    private profService: ProfesseurService,
    private CalculeChargeService: CalculeChargeService,
    private route: ActivatedRoute
  ) {
    // this.route.params.subscribe((params) => {
    //   this.onGetProfById(params.id);
    // });
  }

  ngOnInit(): void {
    this.onGetProfById();
  }

  // events
  onGetProfById() {
    this.profService.getProfesseurByID(5).subscribe((data) => {
      console.log(data);
      this.Prof = data;
      console.log(this.Prof.nom);
      this.CalculeChargeService.SetChargeProf(this.Prof);
    });
  }
}
