import { Component, OnInit ,Input} from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { Module } from "../../../models/module.model";
import { SelectedModuleService } from 'src/app/services/selected-module.service';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})

export class CoursComponent implements OnInit {
  @Input() module;
  selectedMod: Module;
  message = '';
  constructor(private moduleService: ModuleService,private selectedModuleService: SelectedModuleService) { }

  ngOnInit(): void {
    console.log(this.module);
    this.selectedModuleService.sharedMessage.subscribe(message => console.log(message));
  }

  onGetModuleById(id: number) {
    this.moduleService.getModuleByID(id).subscribe(data => console.log(data));
  }
}
