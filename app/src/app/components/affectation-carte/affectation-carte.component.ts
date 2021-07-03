import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-affectation-carte',
  templateUrl: './affectation-carte.component.html',
  styleUrls: ['./affectation-carte.component.css']
})
export class AffectationCarteComponent implements OnInit {
  @Input() professeur;

  constructor() { }

  ngOnInit(): void {
  }

}
