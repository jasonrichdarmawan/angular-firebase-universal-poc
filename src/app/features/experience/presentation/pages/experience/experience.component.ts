import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { GetExperienceBySlugUseCase } from '../../../domain/usecases/get-experience-by-slug.usecase';
import { ActivatedRoute } from '@angular/router';
import { ExperienceEntity } from '../../../domain/entities/experience.entity';
import { Subscription, filter, firstValueFrom, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  isBrowser: boolean;

  slug: string | null;

  experience!: ExperienceEntity | null;

  subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    private route: ActivatedRoute,
    private getExperienceBySlugUseCase: GetExperienceBySlugUseCase,
  ) {
    this.isBrowser = isPlatformBrowser(platformID);
    this.slug = this.route.snapshot.paramMap.get('experience');

    if (this.slug == null) { return }

    this.getExperienceBySlug(this.slug);
  }

  ngOnInit(): void {
  }

  getExperienceBySlug(slug: string) {
    let subscription = this.getExperienceBySlugUseCase
      .get(slug)
      .subscribe(value => this.experience = value)

    this.subscriptions.add(subscription)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
