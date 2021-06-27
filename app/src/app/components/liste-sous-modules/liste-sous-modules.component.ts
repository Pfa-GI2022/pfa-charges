import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { ModuleService } from 'src/app/services/module.service';


@Component({
  selector: 'app-liste-sous-modules',
  templateUrl: './liste-sous-modules.component.html',
  styleUrls: ['./liste-sous-modules.component.css']
})
export class ListeSousModulesComponent implements OnInit {
  module: Module;
  constructor(private route: ActivatedRoute, private moduleService: ModuleService) {
    this.route.params.subscribe(params => {
      this.moduleService.getModuleByID(params.id).subscribe(data => {
        this.module = data;
        console.log(this.module.matieres)
      });
    });
  }
  

  ngOnInit(): void {
   
  }

}
