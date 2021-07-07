import { Component, OnInit, Input } from '@angular/core';
import { Matiere } from 'src/app/models/matiere.model';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';

@Component({
  selector: 'app-carte-matiere-fil',
  templateUrl: './carte-matiere-fil.component.html',
  styleUrls: ['./carte-matiere-fil.component.css'],
})
export class CarteMatiereFilComponent implements OnInit {
  Route: String;
  @Input() module;
  @Input() matieres: Matiere;
  @Input() VH;
  Volume: any;
  TotalVH: number;
  VHCours: number;
  VHTd: number;
  VHTp: number;
  matiereAffecte = false;

  calculTotalCharge() {
    this.TotalVH = this.CalculeChargeService.getVHMatiere(this.matieres).total;
    this.VHCours = this.CalculeChargeService.getVHMatiere(this.matieres).cours;
    this.VHTd = this.CalculeChargeService.getVHMatiere(this.matieres).td;
    this.VHTp = this.CalculeChargeService.getVHMatiere(this.matieres).tp;
  }
  constructor(private CalculeChargeService: CalculeChargeService) {}
  ngOnInit(): void {
    this.Route = `/filiere/modules/${this.module.id}/sousModules/${this.matieres.id}`;
    this.calculTotalCharge();
  }
}
