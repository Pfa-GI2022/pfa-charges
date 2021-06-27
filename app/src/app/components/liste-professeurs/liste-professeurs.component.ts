import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from '../../models/professeur.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
@Component({
  selector: 'app-liste-professeurs',
  templateUrl: './liste-professeurs.component.html',
  styleUrls: ['./liste-professeurs.component.css'],
})
export class ListeProfesseursComponent implements OnInit {
  professeurs: Professeur[];
  term = '';
  selectedProf: Professeur;
  options = [
    { label: 'all', value: 'all' },
    { label: 'charge atteinte', value: 'charge atteinte' },
    { label: 'charge presque atteinte', value: 'charge presque atteinte' },
    { label: 'charge non atteinte', value: 'charge non atteinte' },
  ];
  selectedOption = this.options[0];
  open = false;

  constructor(
    private professeurService: ProfesseurService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.onGetAllProfs();
    this.authService.login({username : 'test',password : 'test'}).subscribe((data) => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      console.log(data.accessToken)
      console.log(this.tokenStorage.getUser().roles);

      console.log(data);
      
    });
  }

  onGetAllProfs(): void {
    this.professeurService.getAllProfesseurs().subscribe((data) => {
      this.professeurs = data;
    });
  }

  onGetProfById(id: number) {
    this.professeurService
      .getProfesseurByID(id)
      .subscribe((data) => console.log(data));
  }

  onSearch(term: string): void {
    this.term = term;
  }

  onSelection(option: any) {
    this.selectedOption = option;
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
