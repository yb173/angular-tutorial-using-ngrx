import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce-base',
  styleUrls: ['./e-commerce-base.component.css'],
  template: `
    <app-top-bar></app-top-bar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ECommerceBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
