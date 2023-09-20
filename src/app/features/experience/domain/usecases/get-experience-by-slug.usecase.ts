import { Injectable } from '@angular/core';
import { GetExperienceBySlugDataSource } from '../../data/datasources/get-experience-by-slug.datasource';
import { ExperienceEntity } from '../entities/experience.entity';
import { Observable, map } from 'rxjs';

@Injectable()
export class GetExperienceBySlugUseCase {

  constructor(private getExperienceBySlugDataSource: GetExperienceBySlugDataSource) { }

  get(slug: string): Observable<ExperienceEntity | null> {
    const aObservable = this.getExperienceBySlugDataSource.get(slug);

    return aObservable.pipe(
      map(val => {
        if (val.length == 0) { return null }

        return {
          title: val[0]['experienceTitle'],
          type: val[0]['experienceType'],
          category: val[0]['experienceCategory'],
          location: {
            city: val[0]['location']['city'],
            country: val[0]['location']['country'],
          },
          coverPhoto: {
            url: val[0]['coverPhoto']
          }
        } as ExperienceEntity
      })
    )
  }
}
