import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { FiliereService } from '../../services/filiere.service';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from 'src/app/models/professeur.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-filiere',
  templateUrl: './create-filiere.component.html',
  styleUrls: ['./create-filiere.component.css'],
})
export class CreateFiliereComponent implements OnInit {
  alert = false;
  open = false;
  professeurs: Professeur[];
  selectedProfesseur: Professeur;
  filterdOptions = [];
  list = [{}];
  hide = true;
  fildID: number;
  depID: number;
  term = '';
  inputItem = '';

  filiereForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private filiereService: FiliereService,
    private professeurService: ProfesseurService,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.onGetAllProfesseurs();
  }

  initForm() {
    this.filiereForm = this.formBuilder.group({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z s]*'),
      ]),
      chefFiliereID: new FormControl(),
      nbreGroupesTd: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(1),
        Validators.maxLength(2),
      ]),
      nbreGroupeTp: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(1),
        Validators.maxLength(2),
      ]),
      nbreGroupePFA: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
    });
  }

  onGetAllProfesseurs(): void {
    this.professeurService.getAllProfesseurs().subscribe((data) => {
      this.professeurs = data;
    });
  }

  onSubmit() {
    this.filiereForm.value.chefFiliereID = this.fildID;
    this.filiereService.createFiliere(this.filiereForm.value).subscribe(() => {
      this.filiereForm.reset({});
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  onSelection(p: any) {
    this.selectedProfesseur = p;
    this.inputItem = p.nom;
    this.fildID = p.id;
    this.hide = true;
  }

  onSearch(term: string): void {
    this.term = term;
  }
}
