import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <app-top-bar></app-top-bar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'Angular Tutorial Using NgRx';
}

