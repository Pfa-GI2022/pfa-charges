import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from '../../models/departement.model'
import { SelectedModuleService } from 'src/app/services/selected-module.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  departement = {};
  constructor(private departementService:DepartementService,private sharedService:SelectedModuleService) { 
    this.onGetDepByID();
  }

  ngOnInit(): void {
    
  }



  onGetDepByID(): void{
    this.departementService.getDepByID(1).subscribe( data => {
      this.departement = data;
      this.sharedService.setDepartement(this.departement)
    });
  }



}
