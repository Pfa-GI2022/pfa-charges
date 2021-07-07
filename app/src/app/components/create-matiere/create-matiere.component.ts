import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatiereService } from 'src/app/services/matiere.service';
import { Matiere } from 'src/app/models/Matiere.model';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/services/module.service';
import { ActiviteService } from 'src/app/services/activite.service';
@Component({
  selector: 'app-create-matiere',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.css']
})
export class CreateMatiereComponent implements OnInit {
  alert = false;
  matiereForm: FormGroup;
  moduleID: number;
  routeSub: Subscription;
  matiere : any;
  module:Module;
  nbreGroupeTd: number;
  nbreGroupeTp: number;
  groupe = ['A','B','C','D'];
  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private matiereService:MatiereService,private moduleService:ModuleService,private activiteService:ActiviteService) { 
    this.routeSub = this.route.parent.params.subscribe(params => {
      this.moduleID = params['id'];
    })

    this.moduleService.getModuleByID(this.moduleID).subscribe(module => {
      this.module = module
      this.nbreGroupeTd = this.module.filiere.nbreGroupesTd;
      this.nbreGroupeTp = this.module.filiere.nbreGroupeTp;
    })
  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(){
    this.matiereForm = this.formBuilder.group({
      nom : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z \s]*")]),
      VHCours : new FormControl('0',[Validators.required,Validators.minLength(1),Validators.maxLength(3) , Validators.pattern("^[0-9]*$")    ]),
      VHTp : new FormControl('0',[Validators.required,Validators.minLength(1),Validators.maxLength(3) , Validators.pattern("^[0-9]*$")    ]),
      VHTd : new FormControl('0',[Validators.required,Validators.minLength(1),Validators.maxLength(3) , Validators.pattern("^[0-9]*$")    ]),
    })
  }

  onSubmit(){
   //
    let newMatiere = {nom : this.matiereForm.value.nom, moduleID : this.moduleID};
   
    this.matiereService.createMatiere(newMatiere).subscribe( response => {
      this.matiere = response;
    if(this.matiereForm.value.VHTd > 0){
      for(let i=0;i<this.nbreGroupeTd ;i++){
        let activite = {
          volumeHoraire : this.matiereForm.value.VHTd,
          matiereID : this.matiere.id,
          nature : 'td',
          groupe : {
            nom : this.groupe[i]
          },
          professeurID : null
        }
        this.activiteService.createActivity(activite).subscribe(data => console.log(data)
        
        )
      }
    }else {
    }

    if(this.matiereForm.value.VHTp > 0){
      for(let i=0;i<this.nbreGroupeTp ;i++){
        let activite = {
          volumeHoraire : this.matiereForm.value.VHTp,
          matiereID : this.matiere.id,
          nature : 'tp',
          groupe : {
            nom : this.groupe[i]
          },
          professeurID : null
        }
        this.activiteService.createActivity(activite).subscribe(data => console.log(data)
        )
      }
    }


    let activite = {
      volumeHoraire : this.matiereForm.value.VHCours,
      matiereID : this.matiere.id,
      nature : 'cours',
      groupe : {
       nom : this.groupe[0]
      },
      professeurID : null
    }
    this.activiteService.createActivity(activite).subscribe(data => console.log(data))
      this.matiereForm.reset({});
      this.alert = true;
    }
    )

    //

  }


  closeAlert(){
    this.alert = false;
  }
}
