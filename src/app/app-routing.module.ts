import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "experiences",
    loadChildren: () => import("./features/experiences/experiences.module").then(m => m.ExperiencesModule)
  },
  {
    path: "experience",
    loadChildren: () => import("./features/experience/experience.module").then(m => m.ExperienceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
