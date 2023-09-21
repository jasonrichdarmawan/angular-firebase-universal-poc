import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GetExperienceBySlugUseCase } from '../../../domain/usecases/get-experience-by-slug.usecase';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExperienceEntity } from '../../../domain/entities/experience.entity';

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
  }

  ngOnInit(): void {
    this.getExperienceBySlug();
  }

  getExperienceBySlug() {
    if (this.slug == null) { return; }
    
    let subscription = this.getExperienceBySlugUseCase
      .get(this.slug)
      .subscribe(value => {
        this.experience = value;
      });

    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
