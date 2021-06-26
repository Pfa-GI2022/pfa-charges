import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-professeur',
  templateUrl: './carte-professeur.component.html',
  styleUrls: ['./carte-professeur.component.css'],
})
export class CarteProfesseurComponent implements OnInit {
  @Input() professeur;
  Route:String;
  constructor() {}

  ngOnInit(): void {
    this.Route=`/departement/profs/${this.professeur.id}`;
  }
}
