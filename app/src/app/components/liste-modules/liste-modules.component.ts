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
  term = '';
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

  

}
