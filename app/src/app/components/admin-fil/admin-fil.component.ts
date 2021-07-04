import { Component, OnInit } from '@angular/core';
import { Filiere } from 'src/app/models/filiere.model';
import { FiliereService } from 'src/app/services/filiere.service';

@Component({
  selector: 'app-admin-fil',
  templateUrl: './admin-fil.component.html',
  styleUrls: ['./admin-fil.component.css'],
})
export class AdminFilComponent implements OnInit {
  Filieres: Filiere[];
  constructor(private FilService: FiliereService) {}

  ngOnInit(): void {
    this.onGetAllFilieres();
  }

  onGetAllFilieres(): void {
    this.FilService.getAllFilieres().subscribe((data) => {
      this.Filieres = data;
    });
  }
}
