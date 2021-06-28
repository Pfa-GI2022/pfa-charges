import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SousModulesRoutingModule } from './sous-modules-routing.module';
import { SousModulesComponent } from './sous-modules.component';
import { TpComponent } from './tp/tp.component';
import { TdComponent } from './td/td.component';
import { CoursComponent } from './cours/cours.component';


@NgModule({
  declarations: [
    SousModulesComponent,
    TpComponent,
    TdComponent,
    CoursComponent,
  ],
  imports: [
    BrowserModule,
    SousModulesRoutingModule
  ],
  providers: [],
  bootstrap: [SousModulesComponent]
})
export class SousModuleModule { }
