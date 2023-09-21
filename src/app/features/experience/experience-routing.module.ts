import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencePage } from './presentation/pages/experience/experience.page';

const routes: Routes = [
  {
    path: ":experience",
    // TODO: loadComponent in Angular 14
    component: ExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
