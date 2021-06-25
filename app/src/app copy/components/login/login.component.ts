import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/js/login.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
