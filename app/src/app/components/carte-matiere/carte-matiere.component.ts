import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carte-matiere',
  templateUrl: './carte-matiere.component.html',
  styleUrls: ['./carte-matiere.component.css'],
})
export class CarteMatiereComponent implements OnInit {
  Route: String;
  @Input() module;
  @Input() matieres;
  ChargeTotal: number;
  activités = [];

  constructor() {}

  calculChargeTotal() {
    this.ChargeTotal=0;
    this.activités = this.matieres.activitePedagogiques;
    console.log("-----------matieres ------------");
    console.log(this.matieres)
    this.activités.forEach( act => {
      this.ChargeTotal += act.volumeHoraire;
    })
  }

    ngOnInit(): void {
   //   this.calculChargeTotal();
      this.Route = `/departement/modules/${this.module.id}/sousModules/${this.matieres.id}`;
  }
}
