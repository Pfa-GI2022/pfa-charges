import { Component, OnInit } from '@angular/core';
import { ModuleService} from '../../services/module.service';
import { Module} from "../../models/module.model";

@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrls: ['./liste-modules.component.css']
})
export class ListeModulesComponent implements OnInit {
  modules: Module[];
  options = [
    { label: 'all', value: 'all' },
    { label: 'Filieres', value: 'Filieres' },
    { label: 'Genie informatique', value: 'Genie informatique' },
    { label: 'Genie informatique', value: 'Genie informatique' },
    
  ];
  selectedOption = this.options[0];
  term = '';
  open = false;
  selectedMod : Module;
  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.onGetAllModules();
  }
  onGetAllModules(): void{
    this.moduleService.getAllModules().subscribe( data => {
      this.modules = data;
      console.log(data);
    });
  }

  onGetModuleById(id:number){
    this.moduleService.getModuleByID(id).subscribe(data => console.log(data));
  }

  onSearch(term:string):void{
    this.term = term;
  }

  onSelection(option: any) {
    this.selectedOption = option;
  }
  toggleOpen() {
    this.open = !this.open;
  }

}
