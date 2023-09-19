import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  constructor(
    private meta: Meta,
  ) {
    this.meta.updateTag(
      { 
        name: "description", 
        content: "An Experience is a unique activity hosted by one of our Hubs, with emphasis on the power of both collaborative and experiential learning."
      }
    )
  }

  ngOnInit(): void {
  }
}
