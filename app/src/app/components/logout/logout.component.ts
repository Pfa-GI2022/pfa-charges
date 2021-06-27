import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {}

  logout(){
    this.tokenStorage.signOut();
  }

}
