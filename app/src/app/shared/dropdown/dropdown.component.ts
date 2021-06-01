import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() options; 
  @Input() selected; 
  open = false;
  
  constructor() { }

  ngOnInit(): void {}

  onSelection(option: any){
    this.selected = option;
  }

  toggleOpen(){
    this.open = !this.open;
  }

}
