import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './presentation/pages/experience/experience.component';

const routes: Routes = [
  {
    path: ":experience",
    // TODO: loadComponent in Angular 14
    component: ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
