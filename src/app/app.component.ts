import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag(
      { 
        name: "description", 
        content: "Celebrate creativity, spread knowledge, connect and have fun - all within one platform! Kickstart your journey today and explore what it means to be a part of our diverse community of Hubs and Learners."
      }
    )
  }
}
