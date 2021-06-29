import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  chefDepID : number;
  depName = '';
  constructor(private elementRef: ElementRef,private sharedService:SharedService) {}

  ngOnInit(): void {
    this.sharedService.currentDeparetement.subscribe(dep => {
      if(dep){
        if(dep.chefDepartementID){
          this.chefDepID = dep.chefDepartementID
          this.depName = dep.nom;
        }
        }
    })
  }
  ngAfterViewInit() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/js/nav.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
