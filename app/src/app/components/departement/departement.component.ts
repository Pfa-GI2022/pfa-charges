import { Component, OnInit } from '@angular/core';
import { Departement } from '../../models/departement.model';
import { SharedService } from 'src/app/services/shared.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { isConstructorDeclaration } from 'typescript';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css'],
})
export class DepartementComponent implements OnInit {

  user: User;
  depID: number;
  departement : Departement;
  navLinks : any;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) =>{
      this.departement = data.Departement;
      this.sharedService.setDepartement(data.Departement)
  
    }
    );

    this.navLinks = [
      {key : 'Liste des Profs',value : 'profs'},
      {key : 'Liste des modules',value : 'modules'},
      {key : 'infos chefDep',value : `profs/${this.departement.chefDepartementID}`}
      ];
  }
}
