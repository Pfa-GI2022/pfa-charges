import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from '../../models/departement.model'
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  departement = {};
  constructor(private departementService:DepartementService) { }

  ngOnInit(): void {
    this.onGetDepByID();
  }

  onGetDepByID(): void{
    this.departementService.getDepByID(1).subscribe( data => {
      this.departement = data;
    });
  }



}
