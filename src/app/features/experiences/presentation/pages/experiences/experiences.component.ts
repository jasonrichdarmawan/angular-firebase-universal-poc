import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GetExperiencesDataSource } from '../../../data/datasources/get-experiences.datasource';
import { GetExperiencesUseCase } from '../../../domain/usecases/get-experiences.service';
import { Experience } from '../../../domain/entities/experiences.entity';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  isBrowser: boolean;

  experiences: Experience[] = [];

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    private meta: Meta,
    private getExperiencesUseCase: GetExperiencesUseCase
  ) {
    this.isBrowser = isPlatformBrowser(platformID);
    this.meta.updateTag(
      { 
        name: "description", 
        content: "An Experience is a unique activity hosted by one of our Hubs, with emphasis on the power of both collaborative and experiential learning."
      }
    )
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
