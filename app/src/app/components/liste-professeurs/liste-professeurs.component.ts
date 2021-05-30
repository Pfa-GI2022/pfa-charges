import { Component, OnInit } from '@angular/core';
import { ProfesseurService} from '../../services/professeur.service';
import { Professeur} from "../../models/professeur.model";

@Component({
  selector: 'app-liste-professeurs',
  templateUrl: './liste-professeurs.component.html',
  styleUrls: ['./liste-professeurs.component.css']
})

export class ListeProfesseursComponent implements OnInit {

  professeurs: Professeur[];
  term = '';
  selectedProf : Professeur;

  constructor(private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.onGetAllProfs();
  }

  onGetAllProfs(): void{
    this.professeurService.getAllProfesseurs().subscribe( data => {
      this.professeurs = data;
      console.log(data);
    });
  }

  onGetProfById(id:number){
    this.professeurService.getProfesseurByID(id).subscribe(data => console.log(data));
  }

  onSearch(term:string):void{
    this.term = term;
  }



}
