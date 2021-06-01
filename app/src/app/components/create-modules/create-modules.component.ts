import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../services/module.service';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-modules',
  templateUrl: './create-modules.component.html',
  styleUrls: ['./create-modules.component.css']
})
export class CreateModulesComponent implements OnInit {

  alert = false;
  moduleForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private moduleService: ModuleService) { }

  ngOnInit(): void 
  {
    this.initForm();
  }
  initForm() {
    this.moduleForm = this.formBuilder.group({
      nom : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z\s]*")]),
      semestre : new FormControl('',[Validators.required,Validators.minLength(5)]),
      filiere : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z\s]*")]),

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


}
