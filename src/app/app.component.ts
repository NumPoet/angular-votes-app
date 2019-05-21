import { Component } from '@angular/core';

import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('Angular', 'https://angular.oi', 100),
      new Link('1Google', 'http://google.com', 45),
      new Link('NumPoet', 'https:numpoet.com', 98),
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
  }
}
