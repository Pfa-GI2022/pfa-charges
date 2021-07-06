import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Filiere } from 'src/app/models/filiere.model';
@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})

export class FiliereComponent implements OnInit {

  filiere:Filiere;
  navLinks : any;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) =>{
      this.filiere = data.Filiere;
      this.sharedService.setFiliere(data.Filiere)
    })

    this.navLinks = [
      {key : 'Liste des modules',value : 'modules'},
      {key : 'infos chefDep',value : `profs/${this.filiere.chefFiliereID}`},
    ];
    }
  }


