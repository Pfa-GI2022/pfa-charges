import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  navLinks = [
    {key : 'Gestion des départements',value : 'departement'},
    {key : 'Gestion des filières',value : 'filiere'},
    {key : 'Gestion des utilisateurs',value : 'users'},
    {key : 'Imports' ,value : 'import'}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
