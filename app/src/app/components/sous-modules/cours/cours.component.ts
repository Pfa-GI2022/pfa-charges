import { Component, OnInit ,Input} from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { Matiere } from "../../../models/matiere.model";
import { SelectedModuleService } from 'src/app/services/selected-module.service';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})

export class CoursComponent implements OnInit {
  @Input() matiere;
  
  constructor(private moduleService: ModuleService,private selectedModuleService: SelectedModuleService) { }

  ngOnInit(): void {
    console.log("cours component int ----------------------")
    this.selectedModuleService.nextMessage("test");
    this.selectedModuleService.sharedMessage.subscribe(message => console.log(message));
    this.selectedModuleService.currentDeparetement.subscribe(dep => console.log(dep))
    
  }

 
}
