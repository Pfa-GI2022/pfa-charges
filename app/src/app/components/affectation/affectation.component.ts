import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { Professeur } from 'src/app/models/professeur.model';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css'],
})
export class AffectationComponent implements OnInit {
  professeurs: Professeur[];
  activiteID: number;
  profsID = [];
  term = '';
  selectedProf: Professeur;
  options = [
    { label: 'all', value: 'all' },
    { label: 'charge atteinte', value: 'charge atteinte' },
    { label: 'charge presque atteinte', value: 'charge presque atteinte' },
    { label: 'charge non atteinte', value: 'charge non atteinte' },
  ];
  selectedOption = this.options[0];
  open = false;
  
  constructor(
    private route: ActivatedRoute,
    private activiteService: ActiviteService,
    private professeurService: ProfesseurService,
    private calculeChargeService: CalculeChargeService,
    private sharedService:SharedService,
    private router:Router
  ) {
    this.route.params.subscribe((params) => {
      this.activiteID = params.id3;
    });

    

  }

  ngOnInit(): void {
    this.getDepProfs();
    this.professeurs.forEach(prof => this.profsID.push(prof.id))
  }


  getDepProfs(){
    this.sharedService.currentDeparetement.subscribe(dep => {
        this.professeurs = dep.Professeurs;
    })
  }
  onGetAllProfs(): void {
    this.professeurService.getAllProfesseurs().subscribe((data) => {
      this.professeurs = data;
    });
  }

  onClick(prof: Professeur) {
    console.log("selected prof",prof)
    this.activiteService
      .updateActivity({ professeurID: prof.id }, this.activiteID)
      .subscribe((response) => {
        this.profsID.forEach(id => {
          this.professeurService.getProfesseurByID(id).subscribe(prof => {
            this.calculeChargeService.SetChargeProf(prof)
          })
        })
        window.location.href = this.router.url.split('/',7).join('/')
      });
  }

  onSearch(term: string): void {
    this.term = term;
  }

  onSelection(option: any) {
    this.selectedOption = option;
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
