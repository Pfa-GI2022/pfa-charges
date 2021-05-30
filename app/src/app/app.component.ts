import { Component,OnInit } from '@angular/core';
import { FiliereService } from '../app/services/filiere.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  filiere :any;
  modules = [];
  chefDeFiliere = {};
  constructor(){}
  ngOnInit(){}
  
  
}
