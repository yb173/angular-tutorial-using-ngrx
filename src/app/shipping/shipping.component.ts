import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/cart.service';
import { ShippingCost } from '../models/shipping-cost.model';

@Component({
  selector: 'app-shipping',
  styleUrls: ['./shipping.component.css'],
  template: `
    <h3>Shipping Prices</h3>

    <div class="shipping-item" *ngFor="let shipping of shippingCosts$ | async">
      <span>{{ shipping.type }}</span>
      <span>{{ shipping.price | currency }}</span>
    </div>
  `,
})
export class ShippingComponent implements OnInit {
  shippingCosts$: Observable<ShippingCost[]>;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }

}
