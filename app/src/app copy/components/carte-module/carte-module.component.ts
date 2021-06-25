import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-module',
  templateUrl: './carte-module.component.html',
  styleUrls: ['./carte-module.component.css']
})
export class CarteModuleComponent implements OnInit {

  @Input() module;
 
  constructor() { }

  ngOnInit(): void {
  }
  
}
