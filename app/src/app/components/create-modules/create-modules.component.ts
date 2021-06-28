import { Component, OnInit, Input} from '@angular/core';
import { ModuleService } from '../../services/module.service';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Module } from '../../models/module.model';
import { FiliereService } from 'src/app/services/filiere.service';


@Component({
  selector: 'app-create-modules',
  templateUrl: './create-modules.component.html',
  styleUrls: ['./create-modules.component.css']
})
export class CreateModulesComponent implements OnInit {

  alert = false;
  moduleForm : FormGroup;
  @Input() filiere;
  @Input() module;
  Route:String;

  open = false;
  constructor(private formBuilder: FormBuilder,private moduleService: ModuleService, private filiereService : FiliereService) { }

  ngOnInit(): void 
  {
    this.initForm();
  }
  initForm() {
    this.moduleForm = this.formBuilder.group({
      nom : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z \s]*")]),
      semestre: new FormControl('', [Validators.required, Validators.pattern("^S+[0-9]$"), Validators.minLength(2), Validators.maxLength(2)]),
      filiere: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z \s]*")]),

    });
  }

  onSubmit(){
    console.log(this.moduleForm.value);
    this.moduleService.createModule(this.moduleForm.value).subscribe(
      response => {
        console.log(response);
        this.moduleForm.reset({});
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
