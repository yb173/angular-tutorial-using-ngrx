import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.css'],
  template: `
    <h3>Cart</h3>

    <p>
      <a routerLink="/shipping">Shipping Prices</a>
    </p>

    <div class="cart-item" *ngFor="let item of items">
      <span>{{ item.name }}</span>
      <span>{{ item.price }}</span>
    </div>

    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit(checkoutForm.value)">

      <div>
        <label for="name">
          Name
        </label>
        <input id="name" type="text" formControlName="name" />
      </div>

      <div>
        <label for="address">
          Address
        </label>
        <input id="address" type="text" formControlName="address" />
      </div>

      <button class="button" type="submit">Purchase</button>
    </form>
  `,
})
export class CartComponent implements OnInit {
  items: Product[];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
