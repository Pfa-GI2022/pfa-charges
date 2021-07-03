import { Component, OnInit, Input} from '@angular/core';
import { Matiere } from 'src/app/models/Matiere.model';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';
@Component({
  selector: 'app-carte-matiere',
  templateUrl: './carte-matiere.component.html',
  styleUrls: ['./carte-matiere.component.css'],
})

export class CarteMatiereComponent implements OnInit {
  Route: String;
  @Input() module;
  @Input() matieres : Matiere;
  TotalVH : number;
  VHCours : number;
  VHTd : number;
  VHTp : number;
  matiereAffecte = false;
  constructor( private calculCharge : CalculeChargeService) {
   }
   


   calculTotalCharge(){
     this.TotalVH = this.calculCharge.getVHMatiere(this.matieres).total;
     this.VHCours = this.calculCharge.getVHMatiere(this.matieres).cours;
     this.VHTd = this.calculCharge.getVHMatiere(this.matieres).td;
     this.VHTp = this.calculCharge.getVHMatiere(this.matieres).tp;
    
   }

    ngOnInit(): void {
      this.estAffectee()
      this.calculTotalCharge();
      this.Route = `/departement/modules/${this.module.id}/sousModules/${this.matieres.id}`;
  }

  estAffectee(){
    this.matiereAffecte = true;
    this.matieres.activitePedagogiques.forEach(a => {
      if(a.professeurID == null){
        this.matiereAffecte = false;
      }
    })
  }

  getToActivity(){
    console.log("--------------------------------------------------------")
    console.log("--------------------------------------------------------")
    console.log("--------------------------------------------------------")
    console.log("--------------------------------------------------------")
    document.getElementById("activity").scrollIntoView({ behavior: 'smooth' });

  }
}
