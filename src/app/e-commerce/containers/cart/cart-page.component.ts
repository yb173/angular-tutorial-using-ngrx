import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from 'src/app/e-commerce/models/product.model';
import { ECommerceFacade } from '../../store/e-commerce.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  styleUrls: ['./cart-page.component.css'],
  template: `
    <h3>Cart</h3>

    <p>
      <a routerLink="/e-commerce/shipping">Shipping Prices</a>
    </p>

    <app-cart-item-list>
      <ng-container *ngFor="let item of items$ | async">
        <app-cart-item-list-item
          [name]="item.name"
          [price]="item.price">
        </app-cart-item-list-item>
      </ng-container>
    </app-cart-item-list>

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
export class CartPageComponent implements OnInit {
  items$: Observable<Product[]>;
  checkoutForm;

  constructor(
    // private cartService: CartService,
    private formBuilder: FormBuilder,
    private eCommerceFacade: ECommerceFacade,

  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });

    this.items$ = this.eCommerceFacade.items$;
  }

  ngOnInit() {
    // this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here

    // TODO:
    // this.items = this.cartService.clearCart();

    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
