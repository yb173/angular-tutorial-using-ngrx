import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShippingCost } from '../../models/shipping-cost.model';
import { ECommerceFacade } from '../../store/e-commerce.facade';

@Component({
  selector: 'app-shipping',
  styleUrls: ['./shipping-page.component.css'],
  template: `
    <h3>Shipping Prices</h3>

    <app-shipping-cost-list>
      <ng-container *ngFor="let shippingCost of shippingCosts$ | async">
        <app-shipping-cost-list-item
          [type]="shippingCost.type"
          [price]="shippingCost.price">
        </app-shipping-cost-list-item>
      </ng-container>
    </app-shipping-cost-list>
  `,
})
export class ShippingPageComponent implements OnInit {
  shippingCosts$: Observable<ShippingCost[]>;

  constructor(
      private eCommerceFacade: ECommerceFacade,
  ) {
    this.shippingCosts$ = this.eCommerceFacade.shippingCosts$;
  }

  ngOnInit() {
    this.eCommerceFacade.loadShippingCosts();
  }

}
