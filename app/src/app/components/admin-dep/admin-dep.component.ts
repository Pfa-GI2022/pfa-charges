import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-admin-dep',
  templateUrl: './admin-dep.component.html',
  styleUrls: ['./admin-dep.component.css'],
})
export class AdminDepComponent implements OnInit {
  Deps: Departement[];
  constructor(private DepService: DepartementService) {}

  ngOnInit(): void {
    this.onGetAllDeps();
  }

  onGetAllDeps(): void {
    this.DepService.getAllDeps().subscribe((data) => {
      this.Deps = data;
    });
  }
}
