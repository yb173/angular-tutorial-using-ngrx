import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import {
  ProductService,
  CartService,
} from '../../services';

import * as fromECommerce from '../reducers';
import { ECommerceActions } from '../actions';
import { of } from 'rxjs';
import {
  Product,
  ShippingCost,
} from '../../models';



@Injectable()
export class ECommerceEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  loadProductsStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ECommerceActions.loadProductsStarted),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((result: Product[]) => ECommerceActions.loadProductsSuccess({ products: result})),
          catchError(error => of(ECommerceActions.loadProductsFailure({ error })))
        )
      )
    )
  );

  loadProductStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ECommerceActions.loadProductStarted),
      switchMap((action) =>
        this.productService.getProduct(action.productId).pipe(
          map((result: Product) => ECommerceActions.loadProductSuccess({ product: result})),
          catchError(error => of(ECommerceActions.loadProductFailure({ error })))
        )
      )
    )
  );

  loadShippingCostsStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ECommerceActions.loadShippingCostsStarted),
      switchMap(() =>
        this.cartService.loadShippingCosts().pipe(
          map((result: ShippingCost[]) => ECommerceActions.loadShippingCostsSuccess({ shippingCosts: result})),
          catchError(error => of(ECommerceActions.loadShippingCostsFailure({ error })))
        )
      )
    )
  );

}
