import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { GetExperienceBySlugUseCase } from '../../../domain/usecases/get-experience-by-slug.usecase';
import { ActivatedRoute } from '@angular/router';
import { ExperienceEntity } from '../../../domain/entities/experience.entity';
import { filter, firstValueFrom, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  isBrowser: boolean;

  @Input() experience!: ExperienceEntity | null;

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    private route: ActivatedRoute,
    private getExperienceBySlugUseCase: GetExperienceBySlugUseCase,
  ) {
    this.isBrowser = isPlatformBrowser(platformID);
  }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('experience');

    if (slug == null) { return }

    this.getExperienceBySlug(slug);
  }

  getExperienceBySlug(slug: string) {
    this.getExperienceBySlugUseCase
      .get(slug)
      .pipe(
        filter(value => value != null),
      )
      .subscribe(value => this.experience = value)
  }
}
