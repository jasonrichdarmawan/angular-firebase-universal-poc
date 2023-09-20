import { Injectable } from '@angular/core';
import { Experience } from '../entities/experiences.entity';
import { GetExperiencesDataSource } from '../../data/datasources/get-experiences.datasource';

@Injectable()
export class GetExperiencesUseCase {

  constructor(private getExperienceDataSource: GetExperiencesDataSource) { }

  get() {
    const response = this.getExperienceDataSource.get()

    const experiences = response.then(
      ({ hits }) => {
        return hits.map(
          (hit) => {
            return {
              coverPhotoUrl: hit.coverPhoto,
              city: hit.address?.city ?? "",
              country: hit.address?.country ?? "",
              title: hit.title,
              expertiseLevel: hit.expertiseLevel,
              primaryLanguage: hit.primaryLanguage,
              slug: hit.slug
            } as Experience
          })
      })

    return experiences
  }
}
