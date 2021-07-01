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
  @Input() VH;
  constructor() {}
    ngOnInit(): void {
      this.Route = `/departement/modules/${this.module.id}/sousModules/${this.matieres.id}`;
  }
}
