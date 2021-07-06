import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-import-profs',
  templateUrl: './import-profs.component.html',
  styleUrls: ['./import-profs.component.css'],
})
export class ImportProfsComponent implements OnInit {
  Deps: Departement[];
  SelectedDepID: Number;
  constructor(private DepService: DepartementService) {
    this.DepService.getAllDeps().subscribe((data) => (this.Deps = data));
  }

  ngOnInit(): void {}
  changeDep(e) {
    console.log(this.SelectedDepID);
  }
}
