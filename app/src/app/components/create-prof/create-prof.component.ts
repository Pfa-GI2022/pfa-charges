import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,

  Validators,
} from '@angular/forms';
import { ProfesseurService } from '../../services/professeur.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-prof',
  templateUrl: './create-prof.component.html',
  styleUrls: ['./create-prof.component.css'],
})
export class CreateProfComponent implements OnInit {
  alert = false;
  profForm: FormGroup;
  depID = 1;
  constructor(
    private formBuilder: FormBuilder,
    private professeurService: ProfesseurService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getDepId();
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

    let newDep = this.profForm.value;
    //newDep.depID = this.depID;
    this.professeurService
      .createProfesseur(this.profForm.value)
      .subscribe((response) => {
        this.profForm.reset({});
        this.alert = true;
      });
  }

  getDepId(){
    this.sharedService.currentDeparetement.subscribe(dep => {
      this.depID = dep.id;
    }) 
    }

  closeAlert() {
    this.alert = false;
  }
}
