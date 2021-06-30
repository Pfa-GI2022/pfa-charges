import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { FiliereService } from '../../services/filiere.service';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-create-filiere',
  templateUrl: './create-filiere.component.html',
  styleUrls: ['./create-filiere.component.css']
})
export class CreateFiliereComponent implements OnInit {
  
  alert = false;
  open = false;
  selected : '';
  profnom : string;
  @Input() professeur;

  filiereForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private filiereService: FiliereService,private professeurService : ProfesseurService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.filiereForm = this.formBuilder.group({
      nom :  new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z \s]*")]),
      nbreGroupesTd : new FormControl('', [Validators.required, Validators.pattern("^[0-9]$"), Validators.minLength(1), Validators.maxLength(1)]),
      nbreGroupeTp :new FormControl('', [Validators.required, Validators.pattern("^[0-9]$"), Validators.minLength(1), Validators.maxLength(1)]),
      nbreGroupePFA : new FormControl('', [Validators.required, Validators.pattern("^[0-9]$"), Validators.minLength(1), Validators.maxLength(1)]),
      chefFiliere : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z\s]*")]),
    });
    }
    onGetAllProfs(): void {
      this.professeurService.getAllProfesseurs().subscribe((data) => {
        this.professeur = data;
      });
    }

  onSubmit(){
    console.log(this.filiereForm.value);
    this.filiereService.createFiliere(this.filiereForm.value).subscribe(
      response => {
        console.log(response);
        this.filiereForm.reset({});
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

  onSelection(option: any) {
    this.selected = option.nom;
    this.profnom = option.nom;
    console.log(this.profnom)
  }
}
