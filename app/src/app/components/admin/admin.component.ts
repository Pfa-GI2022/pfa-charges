import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  navLinks = [
    {key : 'gestion des departements',value : 'departement'},
    {key : 'gestion des filieres',value : 'filiere'},
    {key : 'gestion des utulisateurs',value : 'users'},
    {key : 'imports' ,value : 'import'}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
