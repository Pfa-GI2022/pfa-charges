import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { DepartementService } from '../../services/departement.service';
import { ProfesseurService } from '../../services/professeur.service';
import { Professeur } from 'src/app/models/professeur.model';
@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrls: ['./create-departement.component.css']
})
export class CreateDepartementComponent implements OnInit {

  alert = false;
  open = false;
  selected: '';
  professeurs: Professeur [];
  filterdOptions = [];
  list = [""];

  @Input() professeur;

  departementForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private departementService: DepartementService,private professeurService : ProfesseurService) { }

  onGetAllProfesseurs(): void {
    this.professeurService.getAllProfesseurs().subscribe(data => {
      this.professeurs=data;
      this.professeurs.forEach(prof => {
        this.list.push(prof.nom);
        console.log(prof.nom);
      });
      
    });
  }
 
  ngOnInit(): void {
    this.initForm();
    this.onGetAllProfesseurs();
    this.filteredList = this.list;
  }

  initForm() {
    this.departementForm = this.formBuilder.group({
      nom : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z\s]*")]),
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
 

  onSelection(option: any) {
    this.selected = option.nom;
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
