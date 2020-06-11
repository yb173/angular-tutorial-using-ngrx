import { Component, OnInit } from '@angular/core';

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

    <app-item-list>
      <ng-container *ngFor="let item of items$ | async">
        <app-item-list-item
          [name]="item.name"
          [price]="item.price">
        </app-item-list-item>
      </ng-container>
    </app-item-list>

    <app-cart-form
      (submitForm)="onSubmitForm($event)">
    </app-cart-form>
  `,
})
export class CartPageComponent implements OnInit {
  items$: Observable<Product[]>;

  constructor(
    private eCommerceFacade: ECommerceFacade,
  ) {
    this.items$ = this.eCommerceFacade.items$;
  }

  ngOnInit() {
  }

  onSubmitForm(customerData) {
    // 本来はここでフォームデータの送信処理などをおこなう

    // カートをクリア
    this.eCommerceFacade.clearCart();

    console.warn('Your order has been submitted', customerData);
  }
}
