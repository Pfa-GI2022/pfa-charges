import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {

  links: any;
  userID:number;
  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.userID = this.tokenStorage.getUser().accountOwner.id;
    console.log(`/professeur/${this.userID}`)
    this.links = [
      {key : 'Informations Personnelles',value : `/professeur/${this.userID}`},
    ] 
  }

}
