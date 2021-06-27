import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-matiere',
  templateUrl: './carte-matiere.component.html',
  styleUrls: ['./carte-matiere.component.css']
})
export class CarteMatiereComponent implements OnInit {
  Route:String;
  constructor() { }

  ngOnInit(): void {
    this.Route='sousModule'
  }
}
