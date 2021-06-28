import { Component,OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  filiere :any;
  modules = [];
  chefDeFiliere = {};
  constructor(private tokenStorage:TokenStorageService){}
  ngOnInit(){
  }
  
  
}
