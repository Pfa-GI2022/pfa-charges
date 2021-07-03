import { NgModule } from '@angular/core';

import { SousModulesRoutingModule } from './sous-modules-routing.module';
import { SousModulesComponent } from './sous-modules.component';
import { TpComponent } from './tp/tp.component';
import { TdComponent } from './td/td.component';
import { CoursComponent } from './cours/cours.component';
import { CommonModule } from '@angular/common';

//
@NgModule({
  declarations: [
    SousModulesComponent,
    TpComponent,
    TdComponent,
    CoursComponent,
  ],
  imports: [SousModulesRoutingModule, CommonModule],
  providers: [],
  bootstrap: [SousModulesComponent],
  exports: [TdComponent, TpComponent, CoursComponent, SousModulesComponent],
})
export class SousModuleModule {}
