import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/e-commerce/models/product.model';
import { ECommerceFacade } from '../../store/e-commerce.facade';

@Component({
  selector: 'app-product-details-page',
  styleUrls: ['./product-details-page.component.css'],
  template: `
    <h2>Product Details</h2>

    <app-product-details
      [product] = "product$ | async"
      (addToCart) = "onAddToCart($event)"
    ></app-product-details>
  `,
})
export class ProductDetailsPageComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private eCommerceFacade: ECommerceFacade,
  ) {
    this.product$ = this.eCommerceFacade.product$;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eCommerceFacade.loadProduct(+params.get('productId'));
    });
  }

  /**
   * addToCart のイベントハンドラです．
   * @param item 追加される商品
   */
  onAddToCart(item: Product): void {
    this.eCommerceFacade.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }
}
