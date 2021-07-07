import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from '../../models/professeur.model';
import { SharedService } from 'src/app/services/shared.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-liste-professeurs',
  templateUrl: './liste-professeurs.component.html',
  styleUrls: ['./liste-professeurs.component.css'],
})
export class ListeProfesseursComponent implements OnInit {
  professeurs : Professeur[];
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

  constructor(private professeurService: ProfesseurService,private sharedService:SharedService) {}

  ngOnInit(): void {
    this.getDepProfs();
  }

  onGetAllProfs(): void {
    this.professeurService.getAllProfesseurs().subscribe((data) => {
      this.professeurs = data;
    });
  }

  getDepProfs(){
    this.sharedService.currentDeparetement.subscribe(dep => {
        this.professeurs = dep.Professeurs;
        console.log(this.professeurs)
    })
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
