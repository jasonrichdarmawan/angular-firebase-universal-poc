import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';


@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
