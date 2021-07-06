import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-import-profs',
  templateUrl: './import-profs.component.html',
  styleUrls: ['./import-profs.component.css'],
})
export class ImportProfsComponent implements OnInit {
  Dep: Departement;
  Deps: Departement[];
  constructor(private DepService: DepartementService) {
    DepService.getAllDeps().subscribe((data) => (this.Deps = data));
  }

  ngOnInit(): void {}
  changeDep(e) {
    this.Dep = e.target.value;
    console.log(e);
    console.log(this.Dep);
  }
}
