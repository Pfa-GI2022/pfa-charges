import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from '../../models/departement.model'
import { SharedService } from 'src/app/services/shared.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  user : User;
  depID: number;
  departement = {};
  constructor(
      private departementService:DepartementService,
      private sharedService:SharedService,
      private tokenStorage:TokenStorageService
      ) { 
        this.user = this.tokenStorage.getUser();
        if(this.user){
          if(this.user.accountOwner){
            this.depID = this.user.accountOwner.depID;
            console.log(this.depID)
          }
        }
    this.onGetDepByID();
  }

  ngOnInit(): void {
    
  }


  onGetDepByID(): void{
    this.departementService.getDepByID(this.depID).subscribe( data => {
      this.departement = data;
      this.sharedService.setDepartement(this.departement)
    });
  }



}
