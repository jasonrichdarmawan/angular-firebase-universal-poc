import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesPage } from './presentation/pages/experiences/experiences.page';

const routes: Routes = [
  {
    path: "",
    // TODO: loadComponent in Angular 14
    component: ExperiencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
