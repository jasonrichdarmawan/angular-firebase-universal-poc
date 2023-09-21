import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePage } from './experience.page';

describe('ExperienceComponent', () => {
  let component: ExperiencePage;
  let fixture: ComponentFixture<ExperiencePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
