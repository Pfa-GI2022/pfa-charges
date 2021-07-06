import { Component, ElementRef, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() links = [];
  @Input() title = "";
  constructor(private elementRef: ElementRef,private sharedService:SharedService) {}

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/js/nav.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
