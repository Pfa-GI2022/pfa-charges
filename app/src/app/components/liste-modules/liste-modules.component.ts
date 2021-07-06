import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../services/module.service';
import { Module } from '../../models/module.model';
import { SharedService } from 'src/app/services/shared.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { Filiere } from 'src/app/models/filiere.model';

@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrls: ['./liste-modules.component.css'],
})
export class ListeModulesComponent implements OnInit {
  modules: Module[];
  options = [{ label: 'All', value: 'all' }];
  Filieres: Filiere[];
  selectedOption = this.options[0];
  term = '';
  open = false;
  selectedMod: Module;

  constructor(
    private moduleService: ModuleService,
    private sharedService: SharedService,
    private filService: FiliereService
  ) {}

  ngOnInit(): void {
    this.onGetOptions();
    this.getDepModules()
  }


  onGetAllModules(): void {
    this.moduleService.getAllModules().subscribe((data) => {
      console.log(data)
    });
  }

  getDepModules(){
    this.sharedService.currentDeparetement.subscribe(dep => {
      this.modules = dep.modules
    })
  }
  onGetModuleById(id: number) {
    this.moduleService.getModuleByID(id).subscribe((data) => console.log(data));
  }

  onSearch(term: string): void {
    this.term = term;
  }

  onSelection(option: any) {
    this.selectedOption = option;
  }
  toggleOpen() {
    this.open = !this.open;
  }
  onGetOptions() {
    this.filService.getAllFilieres().subscribe((data) => {
      this.Filieres = data;
      this.Filieres.forEach((f) => {
        this.options.push({ label: f.nom, value: f.nom });
      });
    });
  }
}
