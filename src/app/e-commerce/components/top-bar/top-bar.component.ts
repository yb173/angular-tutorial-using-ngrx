import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  styleUrls: ['./top-bar.component.css'],
  template: `
    <a [routerLink]="['/']">
      <h1>My Store</h1>
    </a>
    <a [routerLink]="['/e-commerce/cart']" class="button fancy-button">
      <i class="material-icons">
        shopping_cart
      </i>
      Checkout
    </a>
  `,
})
export class TopBarComponent { }
