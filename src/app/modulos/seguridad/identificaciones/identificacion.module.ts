import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificacionComponent } from './identificacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IdentificacionComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class IdentificacionModule { }
