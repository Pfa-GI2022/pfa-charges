import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from '../../models/departement.model';
import { SharedService } from 'src/app/services/shared.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css'],
})
export class DepartementComponent implements OnInit {
  user: User;
  depID: number;
  departement = {};
  constructor(
    private departementService: DepartementService,
    private sharedService: SharedService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) =>
      this.sharedService.setDepartement(data.Departement)
    );
  }
}
