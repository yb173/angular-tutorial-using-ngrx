import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { ECommerceFacade } from '../../store/e-commerce.facade';

@Component({
  selector: 'app-product-list-page',
  styleUrls: ['./product-list-page.component.css'],
  template: `
    <h2>Products</h2>
    <app-product-list>
      <ng-container *ngFor="let product of products$ | async">
        <app-product-list-item
          [productId]="product.productId"
          [name]="product.name"
          [price]="product.price"
          [description]="product.description"
          (share)="onShare()"
          (notify)="onNotify()">
        </app-product-list-item>
      </ng-container>
    </app-product-list>
  `,
})
export class ProductListPageComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private eCommerceFacade: ECommerceFacade,
  ) {
    this.products$ = this.eCommerceFacade.products$;
  }

  ngOnInit() {
    this.eCommerceFacade.loadProducts();
  }

  onShare() {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}
