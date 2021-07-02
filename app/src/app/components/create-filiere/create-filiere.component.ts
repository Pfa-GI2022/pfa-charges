import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { FiliereService } from '../../services/filiere.service';
import { ProfesseurService } from '../../services/professeur.service';
import { Filiere } from 'src/app/models/filiere.model';
import { Professeur } from 'src/app/models/professeur.model';

@Component({
  selector: 'app-create-filiere',
  templateUrl: './create-filiere.component.html',
  styleUrls: ['./create-filiere.component.css']
})
export class CreateFiliereComponent implements OnInit {
  
  alert = false;
  open = false;
  selected: '';
  professeurs: Professeur[];
  filterdOptions = [];
  list = [""];
  fildID: number;
  depID: number;

  filiereForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private filiereService: FiliereService,private professeurService : ProfesseurService) { }

  ngOnInit(): void {
    this.initForm();
    this.onGetAllProfesseurs();
  }

  initForm() {
    this.filiereForm = this.formBuilder.group({
      nom :  new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z \s]*")]),
      nbreGroupesTd : new FormControl('', [Validators.required, Validators.pattern("^[0-9]$"), Validators.minLength(1), Validators.maxLength(1)]),
      nbreGroupeTp :new FormControl('', [Validators.required, Validators.pattern("^[0-9]$"), Validators.minLength(1), Validators.maxLength(1)]),
      nbreGroupePFA : new FormControl('', [Validators.required, Validators.pattern("^[0-9]$"), Validators.minLength(1), Validators.maxLength(1)]),
    });
    }
    
  onGetAllProfesseurs(): void {
    this.professeurService.getAllProfesseurs().subscribe(data => {
      this.professeurs = data;
      console.log(data)
      this.professeurs.forEach(prof => {
        this.list.push(prof.nom);
        console.log(prof.nom);
      });

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


  inputItem = '';
  listHidden = true;
  showError = false;
  selectedIndex = -1;


  filteredList: string[] = [];



  getFilteredList() {

    this.listHidden = false;
    if (!this.listHidden && this.inputItem !== undefined) {
      this.filteredList = this.list.filter((item) => item.toLowerCase().startsWith(this.inputItem.toLowerCase()));
    }
  }

  selectItem(ind) {

    this.inputItem = this.filteredList[ind];
    this.listHidden = true;
    this.selectedIndex = ind;
  }

  onKeyPress(event) {

    if (!this.listHidden) {
      if (event.key === 'Escape') {
        this.selectedIndex = -1;
        this.toggleListDisplay(0);
      }

      if (event.key === 'Enter') {

        this.toggleListDisplay(0);
      }
      if (event.key === 'ArrowDown') {

        this.listHidden = false;
        this.selectedIndex = (this.selectedIndex + 1) % this.filteredList.length;
        if (this.filteredList.length > 0 && !this.listHidden) {
          document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
        }
      } else if (event.key === 'ArrowUp') {

        this.listHidden = false;
        if (this.selectedIndex <= 0) {
          this.selectedIndex = this.filteredList.length;
        }
        this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;

        if (this.filteredList.length > 0 && !this.listHidden) {

          document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
        }
      }
    }
  }

  toggleListDisplay(sender: number) {

    if (sender === 1) {
      this.listHidden = false;
      this.getFilteredList();
    } else {
      setTimeout(() => {
        this.selectItem(this.selectedIndex);
        this.listHidden = true;
        if (!this.list.includes(this.inputItem)) {
          this.filteredList = this.list;
        }
      }, 500);
    }
  }
}
