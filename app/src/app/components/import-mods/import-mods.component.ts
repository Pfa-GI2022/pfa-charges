import { Component, OnInit } from '@angular/core';
import { FiliereService } from 'src/app/services/filiere.service';
import { Filiere } from 'src/app/models/filiere.model';

@Component({
  selector: 'app-import-mods',
  templateUrl: './import-mods.component.html',
  styleUrls: ['./import-mods.component.css'],
})
export class ImportModsComponent implements OnInit {
  Fils: Filiere[];
  SelectedFilID: Number;
  constructor(private FilService: FiliereService) {
    this.FilService.getAllFilieres().subscribe((data) => (this.Fils = data));
  }

  ngOnInit(): void {}
  changeDep(e) {
    console.log(this.SelectedFilID);
  }
}
