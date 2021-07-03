import { Component, OnInit, Input } from '@angular/core';
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
  @Input() VH;
  Volume: any;
  constructor(private CalculeChargeService: CalculeChargeService) {}
  ngOnInit(): void {
    this.Route = `/departement/modules/${this.module.id}/sousModules/${this.matieres.id}`;
    this.Volume = this.CalculeChargeService.getVHMatiere(this.matieres);
  }
}
