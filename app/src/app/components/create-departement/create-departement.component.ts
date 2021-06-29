import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { DepartementService } from '../../services/departement.service';
import { ProfesseurService } from '../../services/professeur.service';
@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrls: ['./create-departement.component.css']
})
export class CreateDepartementComponent implements OnInit {

  alert = false;
  open = false;

  @Input() professeur;

  departementForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private departementService: DepartementService,private professeurService : ProfesseurService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.departementForm = this.formBuilder.group({
      nom : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z\s]*")]),
      chefDepartement : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z\s]*")]),
    });
  }

  onSubmit(){
    console.log(this.departementForm.value);
    this.departementService.createProfesseur(this.departementForm.value).subscribe(
      response => {
        console.log(response);
        this.departementForm.reset({});
        this.alert = true;
      },
      )
  }

  closeAlert(){
    this.alert = false;
  }
  toggleOpen() {
    this.open = !this.open;
  }


}
