import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SousModFilComponent } from './sous-mod-fil.component';
import { SousModFilRoutingModule } from '../sous-mod-fil/sous-mod-fil-routing.module';
import { TpComponent } from './tp/tp.component';
import { TdComponent } from './td/td.component';
import { CoursComponent } from './cours/cours.component';

@NgModule({
  declarations: [SousModFilComponent, TpComponent, TdComponent, CoursComponent],
  imports: [CommonModule, SousModFilRoutingModule],
  bootstrap: [SousModFilComponent],
  exports: [TdComponent, TpComponent, CoursComponent, SousModFilComponent],
})
export class SousModFilModule {}
