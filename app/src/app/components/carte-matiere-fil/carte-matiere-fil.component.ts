import { Component, OnInit, Input } from '@angular/core';
import { CalculeChargeService } from 'src/app/services/calcule-charge.service';

@Component({
  selector: 'app-carte-matiere-fil',
  templateUrl: './carte-matiere-fil.component.html',
  styleUrls: ['./carte-matiere-fil.component.css'],
})
export class CarteMatiereFilComponent implements OnInit {
  Route: String;
  @Input() module;
  @Input() matieres;
  @Input() VH;
  Volume: any;
  constructor(private CalculeChargeService: CalculeChargeService) {}
  ngOnInit(): void {
    this.Route = `/filiere/modules/${this.module.id}/sousModules/${this.matieres.id}`;
    this.Volume = this.CalculeChargeService.getVHMatiere(this.matieres);
  }
}
