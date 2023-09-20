import { Injectable } from '@angular/core';
import { ExperienceForListEntity } from '../entities/experience-for-list.entity';
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
            } as ExperienceForListEntity
          })
      })

    return experiences
  }
}
