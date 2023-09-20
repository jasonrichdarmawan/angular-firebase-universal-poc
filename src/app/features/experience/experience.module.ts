import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './presentation/pages/experience/experience.component';
import { GetExperienceBySlugUseCase } from './domain/usecases/get-experience-by-slug.usecase';
import { GetExperienceBySlugDataSource } from './data/datasources/get-experience-by-slug.datasource';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,

    // TODO: standalone component in Angular 14
    // for ExperienceComponent
    NgOptimizedImageModule
  ],
  providers: [
    // TODO: standalone component in Angular 14
    GetExperienceBySlugUseCase,
    GetExperienceBySlugDataSource,
  ],
})
export class ExperienceModule { }
