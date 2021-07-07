import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ProfesseurService } from '../../services/professeur.service';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/models/departement.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  alert = false;
  UserForm: FormGroup;
  AccountData: FormGroup;
  PersonalData: FormGroup;
  Deps: Departement[];
  Roles = ['admin', 'professeur', 'chefDeDepartement', 'chefDeFiliere'];
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private ProfService: ProfesseurService,
    private DepService: DepartementService
  ) {
    DepService.getAllDeps().subscribe((data) => (this.Deps = data));
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    //AccountData Form Builder
    this.AccountData = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Zs]*'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('[a-zA-Z0-9._%+-s]*'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      roles: new FormControl(),
    });

    //PersonalData Form Builder
    this.PersonalData = this.formBuilder.group({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z \s]*'),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z \s]*'),
      ]),
      email: new FormControl(''),
      dateNaissance: new FormControl('', [Validators.required]),
      grade: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      depID: new FormControl(),
    });

    //Form Builder
    this.UserForm = this.formBuilder.group({
      accountData: this.AccountData,
      personalData: this.PersonalData,
    });
  }

  onSubmit() {
    this.AccountData.value.roles = ['professeur'];
    this.UserService.createUser(this.UserForm.value.accountData).subscribe(
      (response) => {
        this.UserForm.reset({});
        this.alert = true;
      }
    );
    this.PersonalData.value.email = this.AccountData.value.email;
    console.log(this.PersonalData.value);
    this.ProfService.createProfesseur(
      this.UserForm.value.personalData
    ).subscribe((response) => {
      this.UserForm.reset({});
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }

  changeDep(e) {
    this.PersonalData.value.deps.setValue(e.target.value, {
      onlySelf: true,
    });
  }
}
