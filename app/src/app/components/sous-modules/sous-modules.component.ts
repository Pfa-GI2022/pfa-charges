import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/services/module.service';
@Component({
  selector: 'app-sous-modules',
  templateUrl: './sous-modules.component.html',
  styleUrls: ['./sous-modules.component.css']
})
export class SousModulesComponent implements OnInit {

  module : Module;
  constructor(private route: ActivatedRoute,private moduleService: ModuleService) {
    this.route.params.subscribe(params =>{
      this.moduleService.getModuleByID(params.id).subscribe(data => {
        this.module = data;
        console.log(this.module.matieres);
      })
    });
    
  }
  ngOnInit(): void {
  }

}
