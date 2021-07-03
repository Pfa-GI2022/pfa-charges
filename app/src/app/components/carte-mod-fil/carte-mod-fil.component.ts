import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-mod-fil',
  templateUrl: './carte-mod-fil.component.html',
  styleUrls: ['./carte-mod-fil.component.css'],
})
export class CarteModFilComponent implements OnInit {
  @Input() module;
  Route: String;

  constructor() {}

  ngOnInit(): void {
    this.Route = `/filiere/modules/${this.module.id}`;
  }
}
