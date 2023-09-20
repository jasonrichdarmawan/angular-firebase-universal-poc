import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GetExperiencesUseCase } from '../../../domain/usecases/get-experiences.usecase';
import { ExperienceForListEntity } from '../../../domain/entities/experience-for-list.entity';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit {
  isBrowser: boolean;

  experiences: ExperienceForListEntity[] = [];

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    private getExperiencesUseCase: GetExperiencesUseCase
  ) {
    this.isBrowser = isPlatformBrowser(platformID);
  }

  ngOnInit(): void {
    this.updateExperiences();
  }

  updateExperiences() {
    this.getExperiencesUseCase.get()
    .then((response) => {
      this.experiences = response;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
