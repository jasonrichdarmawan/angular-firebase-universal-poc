import { TestBed } from '@angular/core/testing';

import { GetExperiencesDataSource } from './get-experiences.datasource';

describe('GetExperiencesService', () => {
  let service: GetExperiencesDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExperiencesDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
