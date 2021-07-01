import { Component, Input, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/professeur.model';
import { ProfesseurService } from 'src/app/services/professeur.service';
@Component({
  selector: 'app-dep-card',
  templateUrl: './dep-card.component.html',
  styleUrls: ['./dep-card.component.css'],
})
export class DepCardComponent implements OnInit {
  @Input() Dep;
  ChefDep: Professeur;

  constructor(private ProfService: ProfesseurService) {}

  ngOnInit(): void {
    this.onGetChefDep();
  }

  onGetChefDep(): void {
    this.ProfService.getProfesseurByID(this.Dep.chefDepartementID).subscribe(
      (data) => {
        console.log(this.Dep.chefDepartementID);
        this.ChefDep = data;
      }
    );
  }
}
