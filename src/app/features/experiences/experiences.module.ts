import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './presentation/pages/experiences/experiences.component';
import { GetExperiencesDataSource } from './data/datasources/get-experiences.datasource';
import { GetExperiencesUseCase } from './domain/usecases/get-experiences.usecase';
import { ExperiencesListComponent } from './presentation/components/experiences-list/experiences-list.component';


@NgModule({
  declarations: [
    ExperiencesComponent,

    ExperiencesListComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    
    // TODO: standalone component in Angular 14
    // for ExperiencesListComponent
    NgOptimizedImageModule
  ],
  providers: [
    // TODO: standalone component in Angular 14
    // for ExperiencesListComponent
    GetExperiencesUseCase,
    GetExperiencesDataSource,
  ],
})
export class ExperiencesModule { }
