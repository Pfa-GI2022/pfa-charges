import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../../../services/matiere.service';
import { Matiere } from "../../../models/matiere.model";

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {
  matieres: Matiere[];
  selectedMod: Matiere;
  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
    this.onGetAllMatieres();
  }
  onGetAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(data => {
      this.matieres = data;
      console.log(data);
    });
  }

  onGetMatiereById(id: number) {
    this.matiereService.getMatiereByID(id).subscribe(data => console.log(data));
  }

}
