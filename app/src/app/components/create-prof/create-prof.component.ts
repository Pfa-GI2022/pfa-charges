import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-create-prof',
  templateUrl: './create-prof.component.html',
  styleUrls: ['./create-prof.component.css'],
})
export class CreateProfComponent implements OnInit {
  alert = false;
  profForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private professeurService: ProfesseurService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.profForm = this.formBuilder.group({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Zs]*'),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Zs]*'),
      ]),
      dateNaissance: new FormControl('', [Validators.required]),
      grade: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      charge: this.formBuilder.group({
        chargeTotal: new FormControl(0),
      }),
    });
  }

  onSubmit() {
    console.log(this.profForm.value);
    this.professeurService
      .createProfesseur(this.profForm.value)
      .subscribe((response) => {
        console.log(response);
        this.profForm.reset({});
        this.alert = true;
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
