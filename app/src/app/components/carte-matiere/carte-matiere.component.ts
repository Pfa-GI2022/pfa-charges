import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carte-matiere',
  templateUrl: './carte-matiere.component.html',
  styleUrls: ['./carte-matiere.component.css'],
})
export class CarteMatiereComponent implements OnInit {
  Route: String;
  @Input() matieres;
  constructor() {}
  ngOnInit(): void {
    this.Route = 'sousModules';
  }
}
