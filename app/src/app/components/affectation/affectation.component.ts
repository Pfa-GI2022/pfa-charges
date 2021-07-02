import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})

export class AffectationComponent implements OnInit {
  
  activiteID : number;
  constructor(private route: ActivatedRoute,private activiteService:ActiviteService) { 
    this.route.params.subscribe(params => {
      this.activiteID = params.id3;
    })
    this.activiteService.updateActivity({professeurID:1},this.activiteID).subscribe(response => console.log(response))
  }

  ngOnInit(): void {
    
  }

}
