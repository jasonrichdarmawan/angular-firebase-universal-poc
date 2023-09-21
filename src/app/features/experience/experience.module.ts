import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImageModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperiencePage } from './presentation/pages/experience/experience.page';
import { GetExperienceBySlugUseCase } from './domain/usecases/get-experience-by-slug.usecase';
import { GetExperienceBySlugDataSource } from './data/datasources/get-experience-by-slug.datasource';
import { ExperienceComponent } from './presentation/components/experience/experience.component';

@NgModule({
  declarations: [
    ExperiencePage,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,

    // TODO: standalone component in Angular 14
    // for ExperienceComponent
    // use NgOptimizedImage in Angular 15
    NgOptimizedImageModule,
  ],
  providers: [
    // TODO: standalone component in Angular 14
    GetExperienceBySlugUseCase,
    GetExperienceBySlugDataSource,
  ],
})
export class ExperienceModule { }
