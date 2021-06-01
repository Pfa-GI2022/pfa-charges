import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    InputComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    InputComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
