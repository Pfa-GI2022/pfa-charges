import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css'],
})
export class ListeUsersComponent implements OnInit {
  Users: User[];
  options = [
    { label: 'All', value: 'All' },
    { label: 'Admin', value: 'Admin' },
    { label: 'Professeur', value: 'Professeur' },
    { label: 'Chef De Departement', value: 'Chef De Departement' },
    { label: 'Chef De Filiere', value: 'Chef De Filiere' },
  ];
  selectedOption = this.options[0];
  open = false;
  term = '';
  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.onGetAllUsers();
  }
  onGetAllUsers(): void {
    this.UserService.getAllUsers().subscribe((data) => {
      this.Users = data;
      console.log(this.Users);
    });
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
