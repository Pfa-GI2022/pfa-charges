import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatiereService } from 'src/app/services/matiere.service';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() professeur;
  @Input() activites;
  matieres:any;

  constructor(private professeurService: ProfesseurService, private route: ActivatedRoute, private matiereService: MatiereService) {

    
}


  ngOnInit(): void {

        
  }

  onGetProfById(id: number) {
  }



}

