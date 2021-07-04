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
  matieres:any;

  constructor(private professeurService: ProfesseurService, private route: ActivatedRoute, private matiereService: MatiereService) {
  
      
    
}


  ngOnInit(): void {
    console.log("PROF LOG ON INIT")
    console.log(this.professeur)
    this.route.params.subscribe(params => {
      // this.onGetProfById(params.id);
    })
        
  }

  onGetProfById(id: number) {
    this.professeurService.getProfesseurByID(id).subscribe((data) => {
      console.log(data);
      this.professeur = data;
      console.log("Prof Log");
      console.log(this.professeur)
      this.professeur.activitePedagogiques.forEach(activite => {
        this.matiereService.getMatiereByID(activite.matiereID).subscribe(data => {
          this.matieres = data;
          console.log(data);
        })
      })    
    });
  }



}

