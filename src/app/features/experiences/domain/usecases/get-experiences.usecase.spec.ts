import { TestBed } from '@angular/core/testing';

import { GetExperiencesUseCase } from './get-experiences-use-case.service';

describe('GetExperiencesUseCaseService', () => {
  let service: GetExperiencesUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExperiencesUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
