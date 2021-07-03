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
  @Input() matieres;
  TotalVH : number;

  constructor( private calculCharge : CalculeChargeService) {
 
   }

   calculTotalCharge(){
     this.TotalVH = this.calculCharge.getVHMatiere(this.matieres).total;
     console.log(this.TotalVH);
   }

    ngOnInit(): void {
      console.log(this.matieres)
      this.calculTotalCharge();
      this.Route = `/departement/modules/${this.module.id}/sousModules/${this.matieres.id}`;
  }
}
