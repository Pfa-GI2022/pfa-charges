import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/js/nav.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
