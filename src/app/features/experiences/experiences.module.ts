import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage, NgOptimizedImageModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './presentation/pages/experiences/experiences.component';
import { GetExperiencesDataSource } from './data/datasources/get-experiences.datasource';
import { GetExperiencesUseCase } from './domain/usecases/get-experiences.service';


@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    
    // TODO: standalone component in Angular 14
    // for ExperienceComponent
    NgOptimizedImageModule
  ],
  providers: [
    // TODO: standalone component in Angular 14
    // for ExperiencesComponent
    GetExperiencesUseCase,
    GetExperiencesDataSource
  ],
})
export class ExperiencesModule { }
