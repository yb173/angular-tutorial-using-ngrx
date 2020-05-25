import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { ECommerceActions } from './actions';
import * as fromECommerce from './reducers';
import { Store, select } from '@ngrx/store';
import { ShippingCost } from '../models/shipping-cost.model';

@Injectable()
export class ECommerceFacade {
  products$: Observable<Product[]>;
  product$: Observable<Product>;
  items$: Observable<Product[]>;
  shippingCosts$: Observable<ShippingCost[]>;

  constructor(
    private store: Store<fromECommerce.State>
  ) {
    this.products$ = this.store.pipe(select(fromECommerce.selectProducts));
    this.product$ = this.store.pipe(select(fromECommerce.selectProduct));
    this.items$ = this.store.pipe(select(fromECommerce.selectItems));
    this.shippingCosts$ = this.store.pipe(select(fromECommerce.selectShippingConsts));
  }

  /**
   * 製品一覧を取得します．
   */
  loadProducts(): void {
    this.store.dispatch(ECommerceActions.loadProductsStarted());
  }

  /**
   * 製品を取得します．
   * @param productId 製品 ID
   */
  loadProduct(productId: number): void {
    this.store.dispatch(ECommerceActions.loadProductStarted({ productId }));
  }

  /**
   * 配送料一覧を取得します．
   */
  loadShippingCosts(): void {
    this.store.dispatch(ECommerceActions.loadShippingCostsStarted());
  }

  /**
   * アイテムをカートに追加します．
   */
  addToCart(item: Product): void {
    this.store.dispatch(ECommerceActions.addToCart({ item }));
  }

}
