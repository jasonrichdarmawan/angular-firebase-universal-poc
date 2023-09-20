import { TestBed } from '@angular/core/testing';

import { GetExperienceBySlugDataSource } from './get-experience-by-slug.datasource';

describe('GetExperienceBySlugDataSourceService', () => {
  let service: GetExperienceBySlugDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExperienceBySlugDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
