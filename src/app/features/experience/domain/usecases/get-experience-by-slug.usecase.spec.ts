import { TestBed } from '@angular/core/testing';

import { GetExperienceBySlugUseCase } from './get-experience-by-slug.usecase';

describe('GetExperienceBySlugUseCaseService', () => {
  let service: GetExperienceBySlugUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExperienceBySlugUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
